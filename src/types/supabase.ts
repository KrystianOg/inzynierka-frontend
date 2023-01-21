export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          age: number | null
          avatar: string | null
          created_at: string
          daily_meal_count: number | null
          favorite_cuisines: number[] | null
          favorite_recipes: number[] | null
          first_login: boolean | null
          height: number | null
          id: string
          max_calories: number | null
          max_carbs: number | null
          max_protein: number | null
          min_calories: number | null
          min_carbs: number | null
          min_protein: number | null
          notify_monthly_summary: boolean | null
          prefer_dark_mode: boolean | null
          spoonacular_password: string | null
          spoonacular_username: string | null
          time_to_prepare: number | null
          updated_at: string
          water_consumption: number | null
          weight: number | null
        }
        Insert: {
          age?: number | null
          avatar?: string | null
          created_at?: string
          daily_meal_count?: number | null
          favorite_cuisines?: number[] | null
          favorite_recipes?: number[] | null
          first_login?: boolean | null
          height?: number | null
          id: string
          max_calories?: number | null
          max_carbs?: number | null
          max_protein?: number | null
          min_calories?: number | null
          min_carbs?: number | null
          min_protein?: number | null
          notify_monthly_summary?: boolean | null
          prefer_dark_mode?: boolean | null
          spoonacular_password?: string | null
          spoonacular_username?: string | null
          time_to_prepare?: number | null
          updated_at?: string
          water_consumption?: number | null
          weight?: number | null
        }
        Update: {
          age?: number | null
          avatar?: string | null
          created_at?: string
          daily_meal_count?: number | null
          favorite_cuisines?: number[] | null
          favorite_recipes?: number[] | null
          first_login?: boolean | null
          height?: number | null
          id?: string
          max_calories?: number | null
          max_carbs?: number | null
          max_protein?: number | null
          min_calories?: number | null
          min_carbs?: number | null
          min_protein?: number | null
          notify_monthly_summary?: boolean | null
          prefer_dark_mode?: boolean | null
          spoonacular_password?: string | null
          spoonacular_username?: string | null
          time_to_prepare?: number | null
          updated_at?: string
          water_consumption?: number | null
          weight?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      cuisine:
        | "African"
        | "American"
        | "British"
        | "Cajun"
        | "Caribbean"
        | "Chinese"
        | "Eastern European"
        | "European"
        | "French"
        | "German"
        | "Greek"
        | "Indian"
        | "Irish"
        | "Italian"
        | "Japanese"
        | "Jewish"
        | "Korean"
        | "Latin American"
        | "Mediterranean"
        | "Nordic"
        | "Suthern"
        | "Spanish"
        | "Thai"
        | "Vietnamese"
      dietary_restriction:
        | "Vegan"
        | "Vegetarian"
        | "Gluten Free"
        | "Lactose Intolerant"
      intolerance:
        | "Dairy"
        | "Egg"
        | "Gluten"
        | "Grain"
        | "Peanut"
        | "Seafood"
        | "Sesame"
        | "Shellfish"
        | "Soy"
        | "Sulfite"
        | "Tree Nut"
        | "Wheat"
      kitchen_appliance:
        | "Blender"
        | "Oven"
        | "Microwave"
        | "Stovetop"
        | "Instant Pot"
      workout:
        | "Sedentary"
        | "Lightly Active"
        | "Moderately Active"
        | "Active"
        | "Very Active"
    }
  }
}
