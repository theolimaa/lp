import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kntebqxxdvryrstdmobg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudGVicXh4ZHZyeXJzdGRtb2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MTIwMzAsImV4cCI6MjA4NTQ4ODAzMH0.WVfIY0lauVkMZQVQSq5v_x0Ci-9lJXelW272Rpp_cTQ';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
