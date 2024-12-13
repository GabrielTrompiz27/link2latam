-- Create table for exporter submissions
create table public.exporter_submissions (
  id uuid default gen_random_uuid() primary key,
  company_name text not null,
  country text not null,
  other_country text,
  industry text not null,
  export_products text not null,
  invoice_currency text not null,
  monthly_volumes numeric not null,
  employees text not null,
  financing_currency text not null,
  other_financing_currency text,
  financing_types text[] not null,
  interest_rates jsonb not null,
  financing_periods jsonb not null,
  total_financing numeric not null,
  credit_rating text not null,
  credit_challenges text,
  collateral_types text[],
  other_collateral text,
  credit_enhancement text,
  credit_enhancement_details text,
  full_name text not null,
  position text not null,
  email text not null,
  phone_number text not null,
  preferred_contact text,
  additional_notes text,
  created_at timestamp with time zone default now() not null
);

-- Create table for investor submissions
create table public.investor_submissions (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  contact_method text not null,
  message text,
  created_at timestamp with time zone default now() not null
);

-- Set up RLS policies
alter table public.exporter_submissions enable row level security;
alter table public.investor_submissions enable row level security;

-- Create policies that only allow inserts
create policy "Enable insert for authenticated users only" on public.exporter_submissions
  for insert with check (true);

create policy "Enable insert for authenticated users only" on public.investor_submissions
  for insert with check (true);