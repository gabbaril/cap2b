-- Add comprehensive lead details fields based on internal questionnaire

-- MOMENT IDÉAL DE CONTACT
ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_weekday TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_weekend TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_notes TEXT;

-- INFORMATION SUR LA MAISON
ALTER TABLE leads ADD COLUMN IF NOT EXISTS property_usage TEXT; -- Ex: Résidentielle
ALTER TABLE leads ADD COLUMN IF NOT EXISTS owners_count INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS is_occupied BOOLEAN;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS contact_person TEXT; -- Ex: Le propriétaire
ALTER TABLE leads ADD COLUMN IF NOT EXISTS construction_year INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS floors_count TEXT; -- Ex: 1 étage, 2 étages
ALTER TABLE leads ADD COLUMN IF NOT EXISTS basement_info TEXT; -- Ex: Sous sol vide sanitaire
ALTER TABLE leads ADD COLUMN IF NOT EXISTS bedrooms_count TEXT; -- Ex: 4 Chambres
ALTER TABLE leads ADD COLUMN IF NOT EXISTS approximate_area TEXT; -- Ex: Environ 40 000 pied carré
ALTER TABLE leads ADD COLUMN IF NOT EXISTS recent_renovations BOOLEAN;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS renovations_details TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS garage TEXT; -- Ex: Oui détaché
ALTER TABLE leads ADD COLUMN IF NOT EXISTS property_highlights TEXT; -- Atouts de la maison

-- PROJET DE VENTE
ALTER TABLE leads ADD COLUMN IF NOT EXISTS sale_reason TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS sale_precisions TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS property_to_sell_type TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS sector TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS ideal_sale_deadline TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS approximate_market_value TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS need_buying_help BOOLEAN;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS buying_sector TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS buying_budget TEXT;

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_leads_construction_year ON leads(construction_year);
CREATE INDEX IF NOT EXISTS idx_leads_sector ON leads(sector);
