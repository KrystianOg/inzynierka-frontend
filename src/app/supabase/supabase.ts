import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

const supabaseApi = createApi({
    reducerPath: 'supabase',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Profile'],
    endpoints: (build) => ({

    })
})

export default supabaseApi
