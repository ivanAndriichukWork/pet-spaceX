import { createContext, useContext } from "react"

export type GlobalContent = {
    currentItem: string
    setCurrentItem:(c: string) => void
}


export const MyGlobalContext = createContext<GlobalContent>({
    currentItem: '', // set a default value
    setCurrentItem: () => {},
    })

export const useGlobalContext = () => useContext(MyGlobalContext)

export type GroupContent = {
    currentGroup: string
    setCurrentGroup:(c: string) => void
}
export const GlobalContext = createContext<GroupContent>({
    currentGroup: '', // set a default value
    setCurrentGroup: () => {},
})

export const useGroup = () => useContext(GlobalContext)
