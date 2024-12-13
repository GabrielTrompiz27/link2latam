-- Create the investor_submissions table
create table public.investor_submissions (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text not null,
    phone text not null,
    contact_method text not null,
    message text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.investor_submissions enable row level security;

-- Create policy to allow inserts for all users (authenticated and anonymous)
create policy "Allow inserts for all users" on public.investor_submissions
    for insert
    to public
    with check (true);

-- Create policy to allow reading all rows for all users
create policy "Allow reading for all users" on public.investor_submissions
    for select
    to public
    using (true);