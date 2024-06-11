import React, {useState} from "react"
import auth from '../../api'
import store from "../../redux/store";
import {Title, Input, Button} from "../index";

export const Login = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [isSignUp, setIsSignUp] = useState(true)
    store.subscribe(() => store.getState())

    return (
        <main>
            {!!process.env.GATSBY_USER_LOGIN && !!process.env.GATSBY_USER_PASSWORD ? <Title isCenter={true} size={'small'}>Please use {process.env.GATSBY_USER_LOGIN}/{process.env.GATSBY_USER_PASSWORD} to enter</Title> : ''}
            <form className='flex flex-col mt-40 mx-auto max-w-min'>
                
                <Title isCenter={true} size={'mid'}>{isSignUp ? 'Login' : 'Registration'}</Title>
                {!isSignUp ?
                    <Input
                        inputType={'text'}
                        placeholder={'Username'}
                        onChange={({target}) => setName(target.value.toString())}/> : null}
                <Input
                    inputType={'email'}
                    placeholder={'Email'}
                    onChange={({target}) => setUsername(target.value.toString())}/>
                <Input
                    inputType={'password'}
                    placeholder={'Password'}
                    onChange={({target}) => setPassword(target.value.toString())}/>
                <Button
                    isMain={true}
                    position={'center'}
                    onClick={(event) => {
                        event.preventDefault()
                        if (isSignUp) {
                            auth.auth.login({username, password})
                                .catch((error) => {
                                    setError(error)
                                })
                        } else auth.auth.registration({username, name, password})
                            .catch((error) => {
                                setError(error)
                            })
                    }}
                >Sign {isSignUp ? 'in' : 'up'}</Button>

                {error ?
                    isSignUp ?
                        <p className='text text-center text-red-500'>Email or Password not valid</p> :
                        <p className='text text-center text-red-500'>Email or Password not
                            valid <br/> password must contain 1 number and 1 capital letter</p> :
                    <></>}


                <p
                    className='mt-8 mx-auto px-8 py-1 min-w-max'
                >If you {isSignUp ? "haven't" : 'have'} acc <a
                    className={'text-[blue] underline pointer'}
                    href={'#'}
                    onClick={(event) => {
                        event.preventDefault()
                        setIsSignUp(!isSignUp)
                    }}
                >sign {isSignUp ? 'up' : 'in'}!</a></p>
            </form>
        </main>
    )
}
