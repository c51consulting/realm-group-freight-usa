-- Migration 008: Multi-tenant country support
-- Adds a country column to all tenant-scoped tables to support running
-- multiple country instances against a shared Supabase database.
-- AU instance reads/writes with country='AU'; US instance with country='US'.
--
-- Note: freight_jobs and auctions tables do not exist in migrations 001-007,
-- so they are intentionally omitted here. Freight is modelled on listings;
-- auction bids live in the bids table.

ALTER TABLE IF EXISTS users           ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS listings        ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS orders          ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS offers          ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS feed_tests      ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS carriers        ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS weighbridges    ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';
ALTER TABLE IF EXISTS bids            ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'AU';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'users_country_check' AND table_name = 'users'
  ) THEN
    ALTER TABLE users ADD CONSTRAINT users_country_check CHECK (country IN ('AU','US','IN','CA','UG'));
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_users_country        ON users        (country);
CREATE INDEX IF NOT EXISTS idx_listings_country     ON listings     (country);
CREATE INDEX IF NOT EXISTS idx_orders_country       ON orders       (country);
CREATE INDEX IF NOT EXISTS idx_offers_country       ON offers       (country);
CREATE INDEX IF NOT EXISTS idx_carriers_country     ON carriers     (country);
