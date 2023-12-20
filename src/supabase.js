import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mkwulmsxhtppvfqjjwfh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rd3VsbXN4aHRwcHZmcWpqd2ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTY4NjMsImV4cCI6MTk5ODc5Mjg2M30.sYwq0brHeUumFDW1qrWYKuS3nkjeMOQAJ1Z-RMepa4s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
