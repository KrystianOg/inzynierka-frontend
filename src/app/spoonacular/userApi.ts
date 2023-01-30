import spoonacular from "./spoonacular";

interface ConnectUserData {
    email: string,
    username?: string,
    firstName?: string,
    lastName?: string
}

interface ConnectUserResponse {
    username: string,
    spoonacularPassword: string,
    hash: string
}

const userApi = spoonacular.injectEndpoints({
    endpoints: (build) => ({
        connectUser: build.mutation<ConnectUserResponse, ConnectUserData>({
            query: (body) => ({
                method: 'POST',
                url: '/users/connect',
                body
            })
        })
    })
})

export const {
    useConnectUserMutation,
} = userApi