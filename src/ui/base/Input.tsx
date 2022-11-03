import React, {useState} from "react";

interface LayoutProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    inputType: InputType,
    placeholder: string
}

type InputType = 'password' | 'email' | 'text'

export const Input = ({inputType, placeholder, onChange, ...props}: LayoutProps) => {
    const [isActive , setIsActive] = useState(false)
    let classes = `mt-2 mx-auto bordered border-solid border px-3 py-1 w-60 rounded-md border-stone-900`
    return <div className={'relative flex items-center justify-center'}>
        <label className={`absolute text-[10px] bg-[#fff] top-[0px] ${isActive ? "block" : 'hidden'} px-[5px] left-[13%]`}>{placeholder}</label>
        <input
            key={placeholder}
            id={placeholder}
            className={classes}
            type={inputType}
            placeholder={isActive ? '' : placeholder}
            onChange={onChange}
            {...props}
            onFocus={()=>setIsActive(true)}
            onBlur={(event)=> {
                console.log(event.target.value)
                if (event.target.value.length === 0) {
                    setIsActive(false)
                }
            }}
        />
    </div>
}
