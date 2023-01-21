import { lazy } from 'react'

export const NotFound = lazy(()=> import('./NotFound'))
export const Home = lazy(()=> import('./Home'))
export const SignIn = lazy(()=> import('./Auth/SignIn'))
export const SignUp = lazy(()=> import('./Auth/SignUp'))
export const Profile = lazy(()=> import('./Profile/Profile'))
export const Calendar = lazy(()=>import('./Calendar/Calendar'))
export const Planner = lazy(()=> import('./Planner/Planner'))
export const Recipes = lazy(()=> import('./Recipe/Recipes'))
export const InformationSetup = lazy(()=> import('./PostSignUpStepper/InformationSetup'))
export const Contact = lazy(() => import('./Contact'))