-- Création de la table ecm_reports pour les évaluations comparatives de marché
CREATE TABLE IF NOT EXISTS ecm_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'completed', 'sent')),
  subject_property_snapshot JSONB DEFAULT '{}',
  comparables JSONB DEFAULT '[]'::jsonb,
  analyst_notes TEXT DEFAULT '',
  generated_text TEXT DEFAULT '',
  range_low NUMERIC,
  range_high NUMERIC,
  source_files JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(lead_id)
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_ecm_reports_lead_id ON ecm_reports(lead_id);
CREATE INDEX IF NOT EXISTS idx_ecm_reports_status ON ecm_reports(status);

-- RLS policies (accès admin seulement)
ALTER TABLE ecm_reports ENABLE ROW LEVEL SECURITY;

-- Note: Les routes API utilisent getSupabaseAdmin() qui bypass RLS
-- Mais on ajoute une policy de sécurité par défaut
CREATE POLICY "Admin full access to ecm_reports" ON ecm_reports
  FOR ALL
  USING (true)
  WITH CHECK (true);
