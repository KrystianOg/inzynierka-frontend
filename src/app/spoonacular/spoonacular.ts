import { fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    prepareHeaders: async (headers) => {
        headers.set('X-RapidAPI-Key', import.meta.env.VITE_APP_RAPID_API_KEY)
        headers.set('X-RapidAPI-Host', import.meta.env.VITE_APP_RAPID_API_HOST)
        return headers
    },
    timeout: 10000,
})

export default createApi({
    reducerPath: 'spoonacular',
    baseQuery,
    keepUnusedDataFor: 60*60,
    refetchOnReconnect: true,
    endpoints: () => ({})
})
