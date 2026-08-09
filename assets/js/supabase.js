const EETG_SUPABASE_URL =
    "https://xirfavvxsoemyldqasba.supabase.co";

const EETG_SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_88FG_I574HGxng5ZemRhQg_fAY3755f";

window.eetgSupabase = supabase.createClient(
    EETG_SUPABASE_URL,
    EETG_SUPABASE_PUBLISHABLE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);
