interface ConnectUserData {
    username?: string,
    firstName?: string,
    lastName?: string,
    email: string
}

interface ConnectUserResponse {
    username: string,
    spoonacularPassword: string,
    hash: string,
}

interface GetMealPlanWeekResponse {
    days: [],

}

// Generate Meal Plan

type WeekDay = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

interface Meal {
    id: number,
    imageType: string,
    title: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
}

interface Nutrients {
    calories: number,
    protein: number,
    fat: number,
    carbohydrates: number
}

interface GenerateMealPlanDayResponse {
    meals: Meal[],
}

type GenerateMealPlanWeekResponse = {
    [key in WeekDay]: {
        meals: Meal[],
        nutrients: Nutrients
    }
}

type AddToMealPlan = {
    date: number,
    slot: number,
    position: number,
    type: string,
    value: {
        id: number,
        servings: number,
        title: string,
        imageType: string,
    }
}

export type {
    ConnectUserData,
    ConnectUserResponse,
    GetMealPlanWeekResponse,
    GenerateMealPlanDayResponse,
    GenerateMealPlanWeekResponse,
    AddToMealPlan
}
