/**
 * Validation utilities for REALM Ag Marketplace
 * Input validation for listings, offers, orders, users, and weighbridge data
 */

import { MaterialType, UnitType, PricingType, UserRole } from './types';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

// Email validation
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// EIN validation (US Employer Identification Number — XX-XXXXXXX, 9 digits)
// Format: 2-digit prefix, dash optional, 7-digit suffix
export function isValidEIN(ein: string): boolean {
  const cleaned = ein.replace(/[\s-]/g, '');
  if (!/^\d{9}$/.test(cleaned)) return false;
  // Valid EIN prefixes (IRS Publication 1635). We allow all 2-digit prefixes 01-99
  // because the IRS has expanded the set; reject only obvious junk (00, all-zeros)
  const prefix = cleaned.substring(0, 2);
  if (prefix === '00') return false;
  if (cleaned === '000000000') return false;
  return true;
}

// Backwards-compat shim: code paths that still call isValidABN now validate EIN.
// DB column is still named `abn`, but a US user supplies an EIN.
export function isValidABN(abn: string): boolean {
  return isValidEIN(abn);
}

// Phone validation (US format) — accept E.164 +1XXXXXXXXXX or 10-digit local
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // +1 then 10 digits, or just 10 digits (assume US), or 11 digits starting with 1
  return /^(\+?1)?[2-9]\d{2}[2-9]\d{6}$/.test(cleaned);
}

// Password strength
export function isStrongPassword(password: string): boolean {
  return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
}

// Listing validation
export function validateListing(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  if (!data.title || typeof data.title !== 'string' || (data.title as string).trim().length < 5) {
    errors.push({ field: 'title', message: 'Title must be at least 5 characters' });
  }
  if (!data.materialType) {
    errors.push({ field: 'materialType', message: 'Material type is required' });
  }
  if (!data.unitType) {
    errors.push({ field: 'unitType', message: 'Unit type is required' });
  }
  if (!data.type || !['sell', 'buy', 'freight_only'].includes(data.type as string)) {
    errors.push({ field: 'type', message: 'Listing type must be sell, buy, or freight_only' });
  }
  if (data.pricePerUnit !== undefined && (isNaN(Number(data.pricePerUnit)) || Number(data.pricePerUnit) < 0)) {
    errors.push({ field: 'pricePerUnit', message: 'Price must be a positive number' });
  }
  if (data.quantityAvailable !== undefined && (isNaN(Number(data.quantityAvailable)) || Number(data.quantityAvailable) <= 0)) {
    errors.push({ field: 'quantityAvailable', message: 'Quantity must be greater than zero' });
  }

  return { valid: errors.length === 0, errors };
}

// Offer validation
export function validateOffer(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  if (!data.pricePerUnit || isNaN(Number(data.pricePerUnit)) || Number(data.pricePerUnit) <= 0) {
    errors.push({ field: 'pricePerUnit', message: 'Price per unit must be positive' });
  }
  if (!data.quantity || isNaN(Number(data.quantity)) || Number(data.quantity) <= 0) {
    errors.push({ field: 'quantity', message: 'Quantity must be positive' });
  }
  if (!data.listingId) {
    errors.push({ field: 'listingId', message: 'Listing ID is required' });
  }

  return { valid: errors.length === 0, errors };
}

// Weighbridge event validation
export function validateWeighbridgeEvent(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  if (!data.grossWeight || isNaN(Number(data.grossWeight)) || Number(data.grossWeight) <= 0) {
    errors.push({ field: 'grossWeight', message: 'Gross weight must be positive' });
  }
  if (!data.tareWeight || isNaN(Number(data.tareWeight)) || Number(data.tareWeight) <= 0) {
    errors.push({ field: 'tareWeight', message: 'Tare weight must be positive' });
  }
  if (data.grossWeight && data.tareWeight && Number(data.grossWeight) <= Number(data.tareWeight)) {
    errors.push({ field: 'grossWeight', message: 'Gross weight must exceed tare weight' });
  }
  if (!data.vehicleRego || typeof data.vehicleRego !== 'string') {
    errors.push({ field: 'vehicleRego', message: 'Vehicle registration is required' });
  }
  if (!data.source || !['api', 'csv_import', 'email_parse', 'ocr_upload', 'manual'].includes(data.source as string)) {
    errors.push({ field: 'source', message: 'Valid source type is required' });
  }

  return { valid: errors.length === 0, errors };
}

// Feed test validation
export function validateFeedTest(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  if (!data.source || !['lab', 'on_farm_nir', 'vendor_estimate'].includes(data.source as string)) {
    errors.push({ field: 'source', message: 'Test source is required' });
  }
  const numericFields = ['dryMatter', 'moisture', 'crudeProtein', 'metabolisableEnergy', 'ndf', 'adf', 'digestibility', 'ash'];
  for (const field of numericFields) {
    if (data[field] !== undefined && data[field] !== null) {
      const val = Number(data[field]);
      if (isNaN(val) || val < 0 || val > 100) {
        errors.push({ field, message: `${field} must be between 0 and 100` });
      }
    }
  }

  return { valid: errors.length === 0, errors };
}

// User registration validation
export function validateRegistration(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  if (!data.email || !isValidEmail(data.email as string)) {
    errors.push({ field: 'email', message: 'Valid email is required' });
  }
  if (!data.password || !isStrongPassword(data.password as string)) {
    errors.push({ field: 'password', message: 'Password must be 8+ chars with upper, lower, and number' });
  }
  if (data.abn && !isValidABN(data.abn as string)) {
    errors.push({ field: 'abn', message: 'Invalid EIN / Tax ID format' });
  }
  if (data.phone && !isValidPhone(data.phone as string)) {
    errors.push({ field: 'phone', message: 'Invalid US phone number (expected 10 digits or +1XXXXXXXXXX)' });
  }
  if (data.role && !['buyer', 'seller', 'carrier', 'admin'].includes(data.role as string)) {
    errors.push({ field: 'role', message: 'Invalid role' });
  }

  return { valid: errors.length === 0, errors };
}
