import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qjqzoxvzdhmemjeecmxf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcXpveHZ6ZGhtZW1qZWVjbXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NDQ0NjAsImV4cCI6MjAyNjUyMDQ2MH0.vxjjqQBYZYKqI3V4gj8bneQhk9YQGVJFnS_mBXVQNQE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);