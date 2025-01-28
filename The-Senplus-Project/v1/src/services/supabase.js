import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uuwlmamrwmjctwcbfpjo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1d2xtYW1yd21qY3R3Y2JmcGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMTA3MzIsImV4cCI6MjA1MjY4NjczMn0.dPKxF0dXI1xI7nN83ybKaFrn1Ba3nOmk8fo1UdaWeUY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
