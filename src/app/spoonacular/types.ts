interface RecipeSearchItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

interface RecipeSearchParams {
    query: string;
    cuisine?: string[];
    excludeCuisine?: string[];
    diet?: string[];
    intolerances?: string[];
    includeIngredients?: string[];
    excludeIngredients?: string[];
    type?: string;
    author?: string;
    maxReadyTime?: number;

    minCarbs?: number;
    maxCarbs?: number;
    minProtein?: number;
    maxProtein?: number;
    minCalories?: number;
    maxCalories?: number;

    minSugar?: number;
    maxSugar?: number;

    // pagination
    offset?: number;
    number?: number;
}

interface Paginate {
    offset?: number;
    number?: number;
}

interface PaginateResult<T> extends Paginate{
    results: T[];
    totalResults: number;
}

export type {
    RecipeSearchItem,
    RecipeSearchParams,
    Paginate,
    PaginateResult
}