import spoonacularApi from './spoonacular'
import { RecipeSearchItem, RecipeSearchParams, Paginate, PaginateResult } from './types';

interface AutocompleteRecipeSearchResponse {
    id: number,
    title: string,
    imageType: string
}

const recipesApi = spoonacularApi.injectEndpoints({
    endpoints: (build) => ({
        autocomplete: build.query<AutocompleteRecipeSearchResponse[], string>({
            query: (query) => ({
                url: 'recipes/autocomplete',
                params: {
                    number: 10,
                    query,
                },
            }),
        }),
        searchRecipes: build.query<PaginateResult<RecipeSearchItem>, RecipeSearchParams & Paginate>({
            query: (params) => ({
                url: 'recipes/complexSearch',
                params: {
                    ...params,
                    instructionsRequired: true,
                }
            })
        }),
        getRecipeInformation: build.query({
            query: (id) => ({
                url: `recipes/${id}/information`
            })
        })
    })
})

export const {
    useAutocompleteQuery,
    useLazySearchRecipesQuery,
    useSearchRecipesQuery,
    useGetRecipeInformationQuery,
    usePrefetch
} = recipesApi

export type {
    AutocompleteRecipeSearchResponse
}
