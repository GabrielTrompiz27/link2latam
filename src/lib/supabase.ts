import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qjqzoxvzdhmemjeecmxf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcXpveHZ6ZGhtZW1qZWVjbXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjkwNTgsImV4cCI6MjA0OTM0NTA1OH0.TOaOr6Lwu8FHk5MKi12RXLmBaPojhXbrw5rTe6b49f0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
});