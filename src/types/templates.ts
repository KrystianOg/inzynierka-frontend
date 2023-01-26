interface Template {
    id: string,

    user_id: string,
    public: boolean,
    name?: string,

    meal_count?: number,
    max_ready_time?: number,
    workout?: string,
// TODO: change that to actual enums
    kitchen_appliances?: string[], 
    min_calories?: number,
    max_calories?: number,
    min_protein?: number,
    max_protein?: number,
    min_carbs?: number,
    max_carbs?: number,
    
    created_at: string,
    updated_at: string
}

type AddTemplate = Omit<Template, "id"| "created_at" |"updated_at">

interface DayTemplate extends Template{
    template_id?: string,
    dual: boolean,
}

export type {
    Template,
    AddTemplate,
    DayTemplate
}