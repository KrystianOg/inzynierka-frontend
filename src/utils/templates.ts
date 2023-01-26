import type { Template, DayTemplate } from 'types/templates'
import { Profile } from 'types/user'
import { Workout } from 'types/enum'

interface BMRProps {
    template: Template,
    profile: Profile
}

export const calculateBMR = ({template, profile}: BMRProps): number => {

    if (profile.gender === undefined) throw new Error("Gender is required")
    if (!profile.age) throw new Error("Age is required")
    if (!profile.weight) throw new Error("Weight is required")
    if (!profile.height) throw new Error("Height is required")

    if (profile.gender) {
        return 66 + (13.7 * profile.weight!) + (5 * profile.height!) - (6.8 * profile.age!)
    }

    if (!profile.gender){
        return 655 + (9.6 * profile.weight!) + (1.8 * profile.height!) - (4.7 * profile.age!)
    }
    
    throw new Error("Some error occurred.")
}

export const calculateNEAT = (props: BMRProps, working: boolean): number => {

    if (working) 
        return (calculateBMR(props) ?? 0) * 0.5

    return (calculateBMR(props) ?? 0) * 0.3
}

export const calculateAMR = (props: BMRProps): number => {
    const bmr = calculateBMR(props);

    if (bmr === undefined) throw new Error("Something went wrong")

    switch(props.profile.workout) {
        case Workout.Sedentary: return bmr*1.2;
        case Workout.LightlyActive: return bmr*1.375;
        case Workout.ModeratelyActive: return bmr*1.55;
        case Workout.Active: return bmr*1.725;
        case Workout.VeryActive: return bmr*1.9;
    }
}

export const calculateTEA = (): number => {
    return 4
}