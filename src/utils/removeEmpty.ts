export default function removeEmpty<Out>(input: any): Out{
    Object.keys(input).forEach(key => 
        input[key] == null && delete input[key])

    return input as Out
}