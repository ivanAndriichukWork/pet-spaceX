import makeRequest from "../makeRequest";
import {AxiosBasicCredentials} from "axios";
import {setToken} from "../index";
import store, {LOGIN} from "../../redux/store";
import {handleLogin} from "../someVariables";

export interface MyAuth extends AxiosBasicCredentials {
    name? : string
}

export const login = (data:MyAuth) => {
    return makeRequest({
        url: '/api/auth/local',
        method: "POST",
        data: {
            identifier: data.username,
            password: data.password
        }
    }).then((resp)=>{
        setToken(resp.data.jwt)
        store.dispatch({
            type: LOGIN,
            // jwt : resp.data.jwt,
            logged : true,
            // user : resp.data.user

        })
        handleLogin(resp.data.user)
    })
}

export const registration = (data:MyAuth) => {
    return makeRequest({
        url: '/api/auth/local/register',
        method: "POST",
        data: {
            username: data.name,
            email: data.username,
            password: data.password
        }
    }).then((resp)=>{
        setToken(resp.data.jwt)
        store.dispatch({
            type: LOGIN,
            // jwt : resp.data.jwt,
            logged : true,
            // user : resp.data.user
        })
        handleLogin(resp.data.user)
    })
}
