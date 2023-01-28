import axios from 'https://esm.sh/axios'

export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

export const axiosClient = axios.create({
    baseURL: Deno.env.get('SPOONACULAR_API_HOST'),
    headers: {
        'X-RapidAPI-Key': Deno.env.get('SPOONACULAR_API_KEY'),
        'X-RapidAPI-Host': Deno.env.get('SPOONACULAR_API_HOST')
    }
})
