import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export default createClient(supabaseUrl!, supabaseAnonKey!)

