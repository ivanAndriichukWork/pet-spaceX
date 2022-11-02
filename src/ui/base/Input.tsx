import React, {ReactNode} from "react";
import {Link as GatsbyLink} from "gatsby";
import store from "../../redux/store";
import auth from "../../api";

interface LayoutProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    inputType: InputType,
    placeholder: string
}

type InputType = 'password' |'email' | 'text'

export const Input = ({inputType, placeholder, onChange, ...props}: LayoutProps) => {
    let classes = `mt-2 mx-auto bordered border-solid border px-3 py-1 w-60 rounded-md border-stone-900`
    return <input
        className={classes}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
    />
}
