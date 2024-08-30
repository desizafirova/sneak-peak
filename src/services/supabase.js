import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fktgpeugewhrdzyebttd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdGdwZXVnZXdocmR6eWVidHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMDA4NTksImV4cCI6MjA0MDU3Njg1OX0.1E_lQS_UzDUR9VsGb-rugW3y6z9o4_regAfxXVlc904';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
