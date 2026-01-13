-- Insert an example broker for testing
-- Password will be set via Supabase Auth dashboard
INSERT INTO brokers (email, full_name, company_name, phone, territory, is_active)
VALUES 
  ('courtier@example.com', 'Jean Courtier', 'Immobilier Pro Inc.', '819-555-1234', 'Trois-Rivières', true)
ON CONFLICT (email) DO NOTHING;
