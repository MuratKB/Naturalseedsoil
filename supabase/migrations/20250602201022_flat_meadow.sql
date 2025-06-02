/*
  # Create product stock management tables

  1. New Tables
    - `product_stock`
      - `id` (uuid, primary key)
      - `product_id` (text, references products)
      - `size` (text)
      - `unit` (text)
      - `stock_level` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `product_stock` table
    - Add policies for authenticated users to read stock levels
    - Add policies for admin users to update stock levels
*/

CREATE TABLE IF NOT EXISTS product_stock (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text NOT NULL,
  size text NOT NULL,
  unit text NOT NULL,
  stock_level integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(product_id, size)
);

ALTER TABLE product_stock ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read stock levels
CREATE POLICY "Anyone can read stock levels"
  ON product_stock
  FOR SELECT
  TO public
  USING (true);

-- Only admins can update stock levels
CREATE POLICY "Admins can update stock levels"
  ON product_stock
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM admin_users
  ));

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_product_stock_updated_at
  BEFORE UPDATE ON product_stock
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert initial stock levels
INSERT INTO product_stock (product_id, size, unit, stock_level)
VALUES
  ('black-seed-oil', '5', 'L', 300),
  ('black-seed-oil', '10', 'L', 150),
  ('black-seed-oil', '20', 'L', 75),
  ('black-seed-oil', '30', 'L', 50),
  ('black-seed-oil', '100', 'L', 15),
  ('laurel-berry-oil', '5', 'L', 100),
  ('laurel-berry-oil', '10', 'L', 50),
  ('laurel-berry-oil', '20', 'L', 25),
  ('laurel-berry-oil', '30', 'L', 15),
  ('laurel-berry-oil', '100', 'L', 5),
  ('aleppo-soap', '100', 'pcs', 1500),
  ('aleppo-soap', '300', 'pcs', 500),
  ('smudge-sticks', '100', 'pcs', 400),
  ('smudge-sticks', '300', 'pcs', 133),
  ('smudge-sticks', '500', 'pcs', 80)
ON CONFLICT (product_id, size) DO UPDATE
SET stock_level = EXCLUDED.stock_level;