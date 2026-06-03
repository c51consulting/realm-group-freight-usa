import { COUNTRY_CODE } from './constants';

export const ACTIVE_COUNTRY = COUNTRY_CODE;

export function scopeToCountry<T extends { eq: (col: string, val: string) => T }>(
  query: T
): T {
  return query.eq('country', ACTIVE_COUNTRY);
}

export function withCountry<T extends Record<string, unknown>>(payload: T): T & { country: string } {
  return { ...payload, country: ACTIVE_COUNTRY };
}
