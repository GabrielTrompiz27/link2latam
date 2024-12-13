import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qjqzoxvzdhmemjeecmxf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcXpveHZ6ZGhtZW1qZWVjbXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzk3NzAsImV4cCI6MjAyMjgxNTc3MH0.YOUR_ACTUAL_KEY';

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