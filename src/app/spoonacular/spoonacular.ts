import { fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import { ConnectUserData, ConnectUserResponse } from 'types/spoonacular'

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
    keepUnusedDataFor: 30*60,
    refetchOnReconnect: true,
    tagTypes: [ 'MealPlan'],
    endpoints: (build) => ({})
})
