-- Enable Row Level Security
ALTER TABLE brokers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Brokers can only see their own profile
CREATE POLICY "Brokers can view their own profile"
  ON brokers FOR SELECT
  USING (auth.uid()::text = id::text);

-- Policy: Brokers can update their own profile
CREATE POLICY "Brokers can update their own profile"
  ON brokers FOR UPDATE
  USING (auth.uid()::text = id::text);

-- Policy: Brokers can only see leads assigned to them
CREATE POLICY "Brokers can view their assigned leads"
  ON leads FOR SELECT
  USING (assigned_to::text = auth.uid()::text);

-- Policy: Brokers can update their assigned leads (status changes)
CREATE POLICY "Brokers can update their assigned leads"
  ON leads FOR UPDATE
  USING (assigned_to::text = auth.uid()::text);

-- Note: Admin policies will be added separately with a service role key
