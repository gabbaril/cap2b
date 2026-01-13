-- ROLLBACK SCRIPT - Use this to undo the lead workflow changes
-- Execute this script if you want to revert to version 109

-- Drop RLS policies
DROP POLICY IF EXISTS "Clients can view their assigned leads" ON leads;
DROP POLICY IF EXISTS "Service role can manage lead assignments" ON lead_assignments;
DROP POLICY IF EXISTS "Clients can view their assigned leads" ON lead_assignments;
DROP POLICY IF EXISTS "Service role can manage clients" ON clients;
DROP POLICY IF EXISTS "Clients can update their own profile" ON clients;
DROP POLICY IF EXISTS "Clients can view their own profile" ON clients;
DROP POLICY IF EXISTS "Service role can manage access tokens" ON lead_access_tokens;
DROP POLICY IF EXISTS "Service role can manage lead notes" ON lead_notes;

-- Drop indexes
DROP INDEX IF EXISTS idx_leads_is_finalized;
DROP INDEX IF EXISTS idx_lead_assignments_client_id;
DROP INDEX IF EXISTS idx_lead_assignments_lead_id;
DROP INDEX IF EXISTS idx_clients_email;
DROP INDEX IF EXISTS idx_lead_access_tokens_expires_at;
DROP INDEX IF EXISTS idx_lead_access_tokens_lead_id;
DROP INDEX IF EXISTS idx_lead_access_tokens_token;
DROP INDEX IF EXISTS idx_lead_notes_created_at;
DROP INDEX IF EXISTS idx_lead_notes_lead_id;

-- Remove columns from leads table
ALTER TABLE leads DROP COLUMN IF EXISTS referrer;
ALTER TABLE leads DROP COLUMN IF EXISTS utm_campaign;
ALTER TABLE leads DROP COLUMN IF EXISTS utm_medium;
ALTER TABLE leads DROP COLUMN IF EXISTS utm_source;
ALTER TABLE leads DROP COLUMN IF EXISTS finalized_at;
ALTER TABLE leads DROP COLUMN IF EXISTS is_finalized;

-- Drop tables
DROP TABLE IF EXISTS lead_assignments;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS lead_access_tokens;
DROP TABLE IF EXISTS lead_notes;

-- Note: This will NOT delete data from brokers or existing leads tables
