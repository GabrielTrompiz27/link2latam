import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgxwpxvbxkrqsqfvxaof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhneHdweHZieGtycXNxZnZ4YW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMzk3NzAsImV4cCI6MjAyMjgxNTc3MH0.H3CW-k4-BMI_wXnDnXbKS-YJeuqwdw_dZvPHuM2v7Ks';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
});