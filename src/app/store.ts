import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { spoonacular } from './spoonacular'
import { supabase } from './supabase'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        [supabase.reducerPath]: supabase.reducer,
        [spoonacular.reducerPath]: spoonacular.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spoonacular.middleware, supabase.middleware, thunk),
    devTools: import.meta.env.NODE_ENV !==  'production',
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch