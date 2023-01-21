// type Gender = "Male" | "Female"
// type Workout = "Sedentary" | "Lightly Active" | "Moderately Active" | "Active" | "Very Active"

enum Gender {
    Male = "Male",
    Female = "Female"
}

enum Workout {
    Sedentary = "Sedentary",
    LightlyActive = "Lightly Active",
    ModeratelyActive = "Moderately Active",
    Active = "Active",
    VeryActive = "Very Active"
}

enum KitchenAppliance {
    Blender = "Blender",
    Oven = "Oven",
    Microwave = "Microwave",
    Stovetop = "Stovetop",
    InstantPot = "Instant Pot"
}

enum DietaryRestriction {
    Vegan = "Vegan",
    Vegetarian = "Vegetarian",
    GlutenFree = "Gluten Free",
    LactoseIntolerant = "Lactose Intolerant"
}

enum DietLabel {
    Balanced = "Balanced",
    HighProtein = "High Protein",
    HighFiber = "High Fiber",
    LowFat = "Low Fat",
    LowCarb = "Low Carb",
    LowSodium = "Low Sodium"
}

enum Cuisine {
    African = "African",
    American = "American",
    British = "British",
    Cajun = "Cajun",
    Caribbean = "Caribbean",
    Chinese = "Chinese",
    EasternEuropean = "Eastern European",
    European = "European",
    French = "French",
    German = "German",
    Greek = "Greek",
    Indian = "Indian",
    Irish = "Irish",
    Italian = "Italian",
    Japanese = "Japanese",
    Jewish = "Jewish",
    Korean = "Korean",
    LatinAmerican = "Latin American",
    Mediterranean = "Mediterranean",
    Mexican = "Mexican",
    MiddleEastern = "Middle Eastern",
    Nordic = "Nordic",
    Southern = "Southern",
    Spanish = "Spanish",
    Thai = "Thai",
    Vietnamese = "Vietnamese"
}

enum Diet {
    GlutenFree = "Gluten Free",
    Ketogenic = "Ketogenic",
    Vegetarian = "Vegetarian",
    LactoVegetarian = "Lacto Vegetarian",
    OvoVegetarian = "Ovo Vegetarian",
    Vegan = "Vegan",
    Pescetarian = "Pescetarian",
    Paleo = "Paleo",
    Primal = "Primal",
    LowFODMAP = "Low FODMAP",
    Whole30 = "WHole30",
}

enum Intolerance {
    Dairy = "Dairy",
    Egg = "Egg",
    Gluten = "Gluten",
    Grain = "Grain",
    Peanut = "Peanut",
    Seafood = "Seafood",
    Sesame = "Sesame",
    Shellfish = "Shellfish",
    Soy = "Soy",
    Sulfite = "Sulfite",
    TreeNut = "Tree Nut",
    Wheat = "Wheat"
}

enum MealType {
    MainCourse = "main course",
    SideDish = "side dish",
    Dessert = "dessert",
    Appetizer = "appetizer",
    Salad = "salad",
    Bread = "bread",
    Breakfast = "breakfast",
    Soup = "soup",
    Beverage = "beverage",
    Sauce = "sauce",
    Marinade = "marinade",
    Fingerfood = "fingerfood",
    Snack = "snack",
    Drink = "drink"
}

export {
    Gender,
    Workout,
    KitchenAppliance,
    DietaryRestriction,
    DietLabel,
    Cuisine,
    Diet,
    MealType,
    Intolerance
}