import spoonacularApi from './spoonacular'
import { GenerateMealPlanDayResponse, GenerateMealPlanWeekResponse, GetMealPlanWeekResponse } from 'types/spoonacular'

interface GetMealPlanWeekData {
    username: string,
    start_date: string,
    hash: string
}

interface GenerateMealPlanData {
    timeFrame: "day" | "week",
    targetCalories?: number,
    diet?: string,
    exclude?: string[]
}

spoonacularApi.injectEndpoints({
    endpoints: (build) => ({
        generateMealPlan: build.query<GenerateMealPlanWeekResponse | GenerateMealPlanDayResponse, GenerateMealPlanData>({
            query: (params) => ({
                url: `/mealplanner/generate`,
                params
            }),
        }),
        getMealPlanWeek: build.query<GetMealPlanWeekResponse, GetMealPlanWeekData>({
            query: ({username, start_date, hash}) => ({
                url: `/mealplanner/${username}/week/${start_date}`,
                params: {
                    hash
                }
            })
        }),
    })
})
