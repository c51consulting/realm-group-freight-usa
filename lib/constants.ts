import type {
  MaterialType,
  UnitType,
  ListingType,
  PricingType,
  QualityLevel,
  AfiaGrade,
  OrderStatus,
  OfferStatus,
  FreightJobStatus,
  LivestockCategory,
  LivestockPurpose,
  LivestockSex,
  ListingCategory,
  FreightCargoType,
} from './types';

export const APP_NAME = 'REALM Group USA';
export const APP_DESCRIPTION =
  'The United States agricultural marketplace — buy and sell hay, grain, livestock, equipment and more with verified quality, integrated freight, and funds held in trust.';
export const PLATFORM_FEE_PERCENT = 5;

export const COUNTRY_CODE = (process.env.NEXT_PUBLIC_COUNTRY_CODE || 'US').toUpperCase();
export const CURRENCY_CODE = 'USD';
export const CURRENCY_SYMBOL = '$';

export const LISTING_CATEGORY_LABELS: Record<ListingCategory, string> = {
  agricultural_materials: 'Agricultural Materials',
  livestock: 'Livestock',
  equipment: 'Equipment',
};
export const LISTING_CATEGORIES: ListingCategory[] = Object.keys(LISTING_CATEGORY_LABELS) as ListingCategory[];

export const MATERIAL_TYPE_LABELS: Record<MaterialType, string> = {
  hay: 'Hay',
  straw: 'Straw',
  silage: 'Silage',
  grain: 'Grain',
  seed: 'Seed',
  pellets: 'Pellets',
  fertiliser: 'Fertilizer',
  supplement: 'Supplement',
  drums: 'Drums',
  bulk_liquid: 'Bulk Liquid',
  other: 'Other',
};
export const MATERIAL_TYPES: MaterialType[] = Object.keys(MATERIAL_TYPE_LABELS) as MaterialType[];

export const LIVESTOCK_CATEGORY_LABELS: Record<LivestockCategory, string> = {
  cattle: 'Cattle',
  sheep: 'Sheep',
  goats: 'Goats',
  pigs: 'Pigs',
  horses: 'Horses',
  poultry: 'Poultry',
  alpacas: 'Alpacas',
  other_livestock: 'Other Livestock',
};
export const LIVESTOCK_CATEGORIES: LivestockCategory[] = Object.keys(LIVESTOCK_CATEGORY_LABELS) as LivestockCategory[];

export const LIVESTOCK_PURPOSE_LABELS: Record<LivestockPurpose, string> = {
  breeding: 'Breeding',
  fattening: 'Fattening',
  store: 'Store',
  export: 'Export',
  slaughter: 'Slaughter',
  stud: 'Stud',
  companion: 'Companion',
};

export const LIVESTOCK_SEX_LABELS: Record<LivestockSex, string> = {
  male: 'Male',
  female: 'Female',
  mixed: 'Mixed',
  wether: 'Wether',
};

export const FREIGHT_CARGO_TYPE_LABELS: Record<FreightCargoType, string> = {
  agricultural_material: 'Agricultural Material',
  livestock: 'Livestock',
  equipment: 'Equipment / Machinery',
  other_cargo: 'Other Cargo',
};
export const FREIGHT_CARGO_TYPES: FreightCargoType[] = Object.keys(FREIGHT_CARGO_TYPE_LABELS) as FreightCargoType[];

export const FUEL_CARD_DISTANCE_THRESHOLD_KM = 500;
export const FUEL_CARD_PROVIDER = 'Comdata';
export const FUEL_CARD_DESCRIPTION = 'Drivers on loads over 500 miles can access fuel assistance via Comdata fuel cards — accepted at 8,000+ truck stops nationwide including Pilot Flying J, Loves, TA-Petro and more.';

export const UNIT_TYPE_LABELS: Record<UnitType, string> = {
  bale_small: 'Small Bale',
  bale_large: 'Large Bale',
  bale_round: 'Round Bale',
  bag: 'Bag',
  drum: 'Drum',
  tonne: 'Short Ton',
  kg: 'Pound (lb)',
  // TODO: bushels as a first-class unit needs a new enum value via migration
  load: 'Load',
  pallet: 'Pallet',
  cubic_metre: 'Cubic Metre',
  litre: 'Litre',
  head: 'Head',
  custom: 'Custom',
};
export const UNIT_TYPES: UnitType[] = Object.keys(UNIT_TYPE_LABELS) as UnitType[];

export const LISTING_TYPE_LABELS: Record<ListingType, string> = {
  sell: 'Selling',
  buy: 'Buying',
  freight_only: 'Freight Only',
};

export const PRICING_TYPE_LABELS: Record<PricingType, string> = {
  fixed: 'Fixed Price',
  offers: 'Offers Welcome',
  auction: 'Auction',
  urgent: 'Urgent Sale',
};

export const QUALITY_LEVEL_LABELS: Record<QualityLevel, string> = {
  basic: 'Basic',
  verified: 'Verified',
  performance: 'Performance',
};

export const QUALITY_LEVEL_DESCRIPTIONS: Record<QualityLevel, string> = {
  basic: 'On-farm NIR or vendor estimate. Suitable for small/spot deals.',
  verified: 'At least one lab feed test plus on-farm NIR. Required for medium/seasonal deals.',
  performance: 'Mandatory lab feed test with USDA-equivalent quality grade. Required for large/performance deals.',
};

/** afiaRequired retained as identifier; semantically means 'USDA-equivalent graded' in US market. */
export const QUALITY_LEVEL_REQUIREMENTS: Record<QualityLevel, { minLabTests: number; nirRequired: boolean; afiaRequired: boolean }> = {
  basic: { minLabTests: 0, nirRequired: false, afiaRequired: false },
  verified: { minLabTests: 1, nirRequired: true, afiaRequired: false },
  performance: { minLabTests: 1, nirRequired: false, afiaRequired: true },
};

export const AFIA_GRADE_LABELS: Record<AfiaGrade, string> = {
  A1: 'A1 — Premium (USDA equivalent)',
  A2: 'A2 — Good (USDA equivalent)',
  B1: 'B1 — Fair (USDA equivalent)',
  B2: 'B2 — Average (USDA equivalent)',
  C1: 'C1 — Below Average (USDA equivalent)',
  C2: 'C2 — Poor (USDA equivalent)',
  D: 'D — Reject (USDA equivalent)',
  ungraded: 'Ungraded',
};
export const AFIA_GRADES: AfiaGrade[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D', 'ungraded'];

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending_payment: 'Pending Payment',
  paid: 'Paid',
  in_transit: 'In Transit',
  delivered: 'Delivered',
  confirmed: 'Confirmed',
  disputed: 'Disputed',
  refunded: 'Refunded',
  completed: 'Completed',
};
export const ORDER_STATUS_FLOW: OrderStatus[] = ['pending_payment', 'paid', 'in_transit', 'delivered', 'confirmed', 'completed'];

export const OFFER_STATUS_LABELS: Record<OfferStatus, string> = {
  pending: 'Pending',
  accepted: 'Accepted',
  rejected: 'Rejected',
  withdrawn: 'Withdrawn',
  expired: 'Expired',
};

export const FREIGHT_JOB_STATUS_LABELS: Record<FreightJobStatus, string> = {
  open: 'Open',
  assigned: 'Assigned',
  in_transit: 'In Transit',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

export const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/listings', label: 'Listings' },
  { href: '/listings?mode=auction', label: 'Auctions' },
  { href: '/livestock', label: 'Livestock' },
    { href: '/equipment', label: 'Equipment' },
  { href: '/freight', label: 'Freight' },
  { href: '/carriers', label: 'Carriers' },
  { href: '/quality', label: 'Feed Tests' },
  { href: '/offers', label: 'Offers' },
  { href: '/orders', label: 'Orders' },
  { href: '/carrier/dashboard', label: 'For Carriers' },
] as const;

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'DC', label: 'District of Columbia' },
] as const;

export const AU_STATES = US_STATES;
