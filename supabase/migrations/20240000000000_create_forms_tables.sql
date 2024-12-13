-- Create table for investor submissions
create table public.investor_submissions (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  contact_method text not null,
  message text,
  created_at timestamptz default now()
);

-- Set up RLS policies
alter table public.investor_submissions enable row level security;

-- Create policy that allows inserts from anyone
create policy "Enable insert for anyone" on public.investor_submissions
  for insert
  to anon, authenticated
  with check (true);

-- Create policy that allows reading all rows
create policy "Enable read access for anyone" on public.investor_submissions
  for select
  to anon, authenticated
  using (true);