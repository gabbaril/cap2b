-- Enable Row Level Security on new tables
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_access_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_assignments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for lead_notes (admin only)
CREATE POLICY "Service role can manage lead notes"
  ON lead_notes FOR ALL
  USING (true);

-- RLS Policies for lead_access_tokens (admin only)
CREATE POLICY "Service role can manage access tokens"
  ON lead_access_tokens FOR ALL
  USING (true);

-- RLS Policies for clients
CREATE POLICY "Clients can view their own profile"
  ON clients FOR SELECT
  USING (auth.uid()::text = id::text);

CREATE POLICY "Clients can update their own profile"
  ON clients FOR UPDATE
  USING (auth.uid()::text = id::text);

CREATE POLICY "Service role can manage clients"
  ON clients FOR ALL
  USING (true);

-- RLS Policies for lead_assignments
CREATE POLICY "Clients can view their assigned leads"
  ON lead_assignments FOR SELECT
  USING (client_id::text = auth.uid()::text);

CREATE POLICY "Service role can manage lead assignments"
  ON lead_assignments FOR ALL
  USING (true);

-- Update leads RLS to allow clients to view their assigned leads
CREATE POLICY "Clients can view their assigned leads"
  ON leads FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM lead_assignments
      WHERE lead_assignments.lead_id = leads.id
      AND lead_assignments.client_id::text = auth.uid()::text
    )
  );
