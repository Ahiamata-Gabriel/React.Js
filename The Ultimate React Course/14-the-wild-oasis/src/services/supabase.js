import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pbejmxhugycgtkzasaxo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZWpteGh1Z3ljZ3RremFzYXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDY4ODAsImV4cCI6MjAzNzg4Mjg4MH0.5TlNLI0a8TyQX3QYsP0XWYeuQVBfNB0is2H82y3ZiNU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
