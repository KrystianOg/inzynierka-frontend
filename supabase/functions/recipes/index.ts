// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.131.0/http/server.ts'
// import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders, axios } from '../_shared/cors.ts'

// interface Recipe {
//   name: string,
//   status: number
// }

const autoComplete = async (params: any) => {
  return axios.get('/recipes/autocomplete',{
    params: {
      number: 10,
      ...params
    }
  })
}

const searchRecipes = async (params: any) => {
  return axios.get('/recipes/complexSearch',{
    params: {
      instructionsRequired: true,
      ...params
    }
  })
}

// const getRecipeInformation = async (params: any, id: string) => {
//   return axios.get(`/recipes/${id}/information`)
// }

serve(async (req) => {
  const { url, method } = req

  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  
  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      { global: { 
        headers: { 
            // Authorization: req.headers.get('Authorization'),
            "X-RapidAPI-Key": Deno.env.get('SPOONACULAR_API_KEY'),
            "X-RapidAPI-Host": Deno.env.get('SPOONACULAR_API_HOST')
          } 
        } 
      })
    
    // Fetch the recipes from the database.
    const urlParts = url.split('/')
    const [_, recipes, type]
    

    
    let task = null
    if (["POST", "PUT"].includes(method)) {
      const body = await req.json();
      task = body.task;
    }

    switch(type) {
      case method === 'GET' && type === 'autocomplete':
        return autoComplete(req.params)
      case method === 'GET' && type === 'complexSearch': 
        return searchRecipes(req.params)
    }
  } catch (error) {
    console.log(error)

    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json'},
      status: 400
    })
  }
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
