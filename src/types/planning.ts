export const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
type Weekday = typeof weekday[number];

type Week ={
    [key in Weekday]: Day;
}

type Day = {
    meals: Meal[],
    nutrients: NutrientsInfo;
}

type Meal = {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}

type NutrientsInfo = {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
}

export type {
    Week,
    Day,
    Meal,
    NutrientsInfo,
    Weekday
}

// export { 
//     Weekday
// }