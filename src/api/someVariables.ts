export const someVariables = {
    token: '',
    setToken: setToken
}

export function setToken(newToken: string) {
    return someVariables.token = newToken
}

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(<string>window.localStorage.getItem("gatsbyUser"))
        : {}


type User = {
    username: string,
    name: string,
    email: string,
}

const setUser = (user: User) =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


export const isLoggedIn = () => {
    const user = getUser()
    return !!user.username
}

export const handleLogin = (user:any) => {
    return setUser({

        username: user.username,
        name: user.name,
        email: user.email,
    })
}

export const logout = () => {
    localStorage.removeItem("gatsbyUser")
    window.location.assign('/')
}
