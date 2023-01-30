import { SignInWithPasswordCredentials, SignInWithOAuthCredentials } from '@supabase/supabase-js'
import supabaseApi from './supabase'
import supabase from 'utils/supabaseClient'

// import userApi from 'app/spoonacular/userApi'

const authApi = supabaseApi.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.query<void, SignInWithPasswordCredentials>({
            queryFn: async (data) => {
                const { error } = await supabase.auth.signInWithPassword(data)
                return error
                    ? { error: error.message }
                    : { data: undefined }
            },
            
            
        }),
        signInWithOAuth: build.query<void, SignInWithOAuthCredentials>({
            queryFn: async (data) => {
                const { error } = await supabase.auth.signInWithOAuth(data)
                
                if (error) return { error: error.message }

                return {
                    data: undefined
                }
            },
        }),
        signOut: build.query<void, void>({
            queryFn: async () => {
                const { error } = await supabase.auth.signOut()
                return error
                    ? { error: error.message }
                    : { data: undefined }
            }
        }),
        signUp: build.query<void, SignInWithPasswordCredentials>({
            queryFn: async (data)=> {
                const { error } = await supabase.auth.signUp(data)
                return error
                    ? { error: error.message }
                    : { data: undefined }
            }
        })
    })
})

export const {
    useLazySignInQuery,
    useLazySignInWithOAuthQuery,
    useLazySignOutQuery,
    useLazySignUpQuery,
} = authApi
