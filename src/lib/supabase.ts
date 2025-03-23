
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserRegistration {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  service: string;
}

export const services = [
  'Website Development',
  'CMS Development',
  'E-commerce Solutions',
  'Web Applications',
  'Mobile Applications',
  'AI Automation',
  'Digital Marketing',
  'Branding & UI/UX Design',
  'Other'
];

export async function registerUser({ email, password, fullName, phone, service }: UserRegistration) {
  // Register the user
  const { data: userData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone,
        service,
      },
    }
  });

  if (signUpError) {
    throw signUpError;
  }

  // Create a record in the clients table
  const { error: profileError } = await supabase
    .from('clients')
    .insert([
      {
        user_id: userData.user?.id,
        email,
        full_name: fullName,
        phone,
        service,
        created_at: new Date(),
      }
    ]);

  if (profileError) {
    throw profileError;
  }

  return userData;
}
