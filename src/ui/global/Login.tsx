import React, {useState} from "react"
import auth from '../../api'
import store from "../../redux/store";
import {Title ,Input ,Button} from "../index";

// markup
export const Login = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [isSignUp, setIsSignUp] = useState(false)
    store.subscribe(() => store.getState())

    return (
        <main >
            <form className='flex flex-col mt-40 mx-auto max-w-min'>
                <Title isCenter={true} size={'mid'}>{isSignUp?'Login': 'Registration'}</Title>

                {!isSignUp?
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

                {error ? <p className='text-red-500'>Email or Password not valid</p> : <></>}


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
