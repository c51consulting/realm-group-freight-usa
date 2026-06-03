// US display units. Underlying DB columns are still SI (kg, km) — these helpers
// convert at the render layer ONLY. Do not migrate stored values.

const COUNTRY = process.env.NEXT_PUBLIC_COUNTRY_CODE || 'AU';
const IS_US = COUNTRY === 'US';

const KG_TO_LB = 2.20462262;
const KM_TO_MI = 0.62137119;

export function formatWeight(kg: number | null | undefined, opts?: { decimals?: number }): string {
  if (kg == null || isNaN(Number(kg))) return '—';
  const decimals = opts?.decimals ?? 0;
  if (IS_US) {
    return `${(Number(kg) * KG_TO_LB).toFixed(decimals)} lb`;
  }
  return `${Number(kg).toFixed(decimals)} kg`;
}

export function formatDistance(km: number | null | undefined, opts?: { decimals?: number }): string {
  if (km == null || isNaN(Number(km))) return '—';
  const decimals = opts?.decimals ?? 0;
  if (IS_US) {
    return `${(Number(km) * KM_TO_MI).toFixed(decimals)} mi`;
  }
  return `${Number(km).toFixed(decimals)} km`;
}

// Inverse: take a user-entered display value (lb on US, kg on AU) and convert to kg for storage.
export function parseWeightToKg(displayValue: string | number): number | null {
  const n = Number(displayValue);
  if (isNaN(n) || n < 0) return null;
  return IS_US ? n / KG_TO_LB : n;
}

export const WEIGHT_UNIT_LABEL = IS_US ? 'lb' : 'kg';
export const DISTANCE_UNIT_LABEL = IS_US ? 'mi' : 'km';
