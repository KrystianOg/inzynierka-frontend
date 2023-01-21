import { Workout, Intolerance, KitchenAppliance, DietaryRestriction } from './enum'

interface Profile {
    id: string, // as in uuid
    age?: number,
    avatar?: string,
    created_at: string,
    daily_meal_count?: number,
    water_consumption?: number,
    cuisine?: string[],
    exclude_cuisine?: string[],
    recipes?: number[],
    exclude_recipes?: number[],
    first_login: boolean,
    height?: number,
    max_calories?: number,
    max_carbs?: number,
    max_protein?: number,
    max_sugar?: number,
    min_calories?: number,
    min_carbs?: number,
    min_protein?: number,
    min_sugar?: number,
    max_ready_time?: number,

    spoonacular_password: string | null,
    spoonacular_username: string | null,

    notify_monthly_summary: boolean,
    notify_weekly_summary: boolean,
    notify_daily_reminder: boolean,
    prefer_dark_mode?: boolean,
    updated_at: string,
    weight?: number,

    // TODO:
    gender?: boolean,
    workout: Workout,
    intolerances: Intolerance[],
    kitchen_appliance: KitchenAppliance,
    diet: DietaryRestriction[],
}

type UpdateProfile = Omit<Profile, "spoonacular_password" | "spoonacular_username" | "first_login" | "created_at">;

export type {
    Profile,
    UpdateProfile
}
