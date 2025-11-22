const { createClient } = supabase;
const supabase = createClient('https://uxbiizkucgcwzqqgjlhu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Ymlpemt1Y2djd3pxcWdqbGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NTM3MzUsImV4cCI6MjA3OTMyOTczNX0.MMfsEO2ePERP0OtfuotxyHdUfHuKV3OV0uAoTTLfnZY');

// Funkcja pomocnicza – będziesz jej używać wszędzie
async function getPatients() {
  const { data, error } = await supabase.from('patients').select('*');
  if (error) console.error(error);
  return data || [];
}

async function addPatient(patient) {
  const { data, error } = await supabase.from('patients').insert(patient);
  if (error) console.error(error);
  return data;
}
