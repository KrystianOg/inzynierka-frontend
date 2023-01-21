import supabaseApi from './supabase'
import supabase from 'utils/supabaseClient'
import { UpdateProfile, Profile } from 'types/user';
import { PostgrestError } from '@supabase/supabase-js';

const userApi = supabaseApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query<Profile, string>({
            queryFn: async (id) => {
                const { data, error } = await supabase.from('profiles').select().eq('id', id).single()
                if (error) return { error: error.message }
                
                return { data }
            },
            providesTags: (_, error, id) => [{ type: 'Profile', id }]
        }),
        updateProfile: build.mutation<void, Pick<UpdateProfile, 'id'> & Partial<UpdateProfile>>({
            queryFn: async ({ id, ...patch}) => {
                const { error } = await supabase.from('profiles').update(patch).eq('id', id)
                if (error) return { error: error.message }
                
                return { data: undefined }
            },
            onQueryStarted({ id, ...patch}, { dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    userApi.util.updateQueryData('getProfile', id, (draft) => {
                        Object.assign(draft, patch)
                    })
                )
                queryFulfilled.catch(patchResult.undo)
            },
            invalidatesTags: ['Profile']
        })
    })
})

export const {
    useGetProfileQuery,
    useUpdateProfileMutation
} = userApi
