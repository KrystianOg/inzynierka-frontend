import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

export default createApi({
    reducerPath: 'supabase',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Profile', 'Template'],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: (_) => ({})
})
