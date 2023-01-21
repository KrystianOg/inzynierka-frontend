import spoonacularApi from './spoonacular'
import { AddToMealPlan, GenerateMealPlanDayResponse, GenerateMealPlanWeekResponse, GetMealPlanWeekResponse } from 'types/spoonacular'

interface GetMealPlanWeekData {
    username: string,
    start_date: string,
    hash: string
}

interface GenerateMealPlanData {
    targetCalories?: number,
    diet?: string,
    exclude?: string[]
}

spoonacularApi.injectEndpoints({
    endpoints: (build) => ({
        generateMealPlanWeek: build.query<GenerateMealPlanWeekResponse, GenerateMealPlanData>({
            query: (params) => ({
                url: `/mealplanner/generate`,
                params: {
                    ...params,
                    timeFrame: "week"
                }
            }),
        }),
        generateMealPlanDay: build.query<GenerateMealPlanDayResponse, GenerateMealPlanData>({
            query: (params) => ({
                url: `/mealplanner/generate`,
                params: {
                    ...params,
                    timeFrame: "day"
                }
            })
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