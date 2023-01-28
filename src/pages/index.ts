import { lazy } from 'react'

export const NotFound = lazy(()=> import('./NotFound'))
export const Home = lazy(()=> import('./Home'))
export const SignIn = lazy(()=> import('./Auth/SignIn'))
export const SignUp = lazy(()=> import('./Auth/SignUp'))
export const Profile = lazy(()=> import('./Profile/Profile'))
export const Plan = lazy(()=> import('./Plan/Plan'))
export const Recipes = lazy(()=> import('./Recipe/Recipes'))
export const InformationSetup = lazy(()=> import('./PostSignUpStepper/InformationSetup'))
export const Contact = lazy(() => import('./Contact'))
export const Templates = lazy(() => import('./Templates/Templates'))
export const Template = lazy(() => import('./Templates/Template'))
export const AddTemplate = lazy(() => import('./Templates/AddTemplate'))