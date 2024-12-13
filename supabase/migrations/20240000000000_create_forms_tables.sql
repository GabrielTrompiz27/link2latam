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
alter table public.investor_submissions enable row level security;

-- Create policy that allows inserts from anyone
create policy "Enable insert for all users" on public.investor_submissions
  for insert with check (true);

-- Create policy that only allows users to read their own submissions
create policy "Enable read access for users based on email" on public.investor_submissions
  for select using (auth.jwt() ->> 'email' = email);