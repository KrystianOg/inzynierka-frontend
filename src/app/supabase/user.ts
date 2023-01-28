import supabaseApi from './supabase'
import supabase from 'utils/supabaseClient'
import { UpdateProfile, Profile } from 'types/user';

const userApi = supabaseApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query<Profile, string>({
            queryFn: async (id) => {
                const { data, error } = await supabase.from('profiles').select().eq('id', id).single()
                return data
                    ? { data }
                    : { error }
            },
            providesTags: (_, error, id) => [{ type: 'Profile', id }]
        }),
        updateProfile: build.mutation<number, Pick<UpdateProfile, 'id'> & Partial<UpdateProfile>>({
            queryFn: async ({ id, ...patch}) => {
                const { error, status } = await supabase.from('profiles').update(patch).eq('id', id)
                return !error
                    ? { data: status }
                    : { error }
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
