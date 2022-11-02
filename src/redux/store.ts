import {createStore, Store} from "redux"
import {isBrowser, isLoggedIn} from "../api/someVariables";


//actions
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const NEW_ITEM = 'NEW_ITEM'

interface InitialState {
    logged: boolean,
    // user: {},
    // jwt: string
    item: string
}

const initialState:InitialState = {
    logged: isBrowser() && isLoggedIn(),
    // user: {},
    // jwt: '',
    item: ''
}

export const logged = (logged:boolean) => ({type: LOGIN , logged: logged})
export const newItem = (item:string) => ({type: NEW_ITEM , item: item})

const reducer = function (state:InitialState|any , action:any) {
    console.log(initialState)

    switch (action.type) {
        case LOGIN: return {
            ...state,
            logged: true,
            // user: action.user,
            // jwt: action.jwt
        }
        case LOGOUT: return {
            ...state,
            logged: false,
        //     user: {},
        //     jwt: ''
        }
        case NEW_ITEM: return {
            item: action.item,
            ...state,
        }
    }
}

let store: Store<{ logged: boolean; item: string }, any>;
store = createStore(reducer, initialState);
export default store
