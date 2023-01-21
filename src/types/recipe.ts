interface Recipe {
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
    image: string,
    instructions: string,
    cuisines: string[],
    dishTypes: string[],
    diets: string[],
}

export type {
    Recipe
}