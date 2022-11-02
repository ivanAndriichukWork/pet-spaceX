import React, {ReactNode} from "react";

interface LayoutProps {
    children?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    isMain: boolean,
    position: Positions
}

type Positions = 'center' |'left' | 'right'

export const Button = ({children, onClick, isMain , position , ...props}: LayoutProps) => {

    let classes = `${isMain ? 'my-4 px-8 bg-cyan-900' : 'inline px-9 bg-[#2E85E5]'} py-1.5 text-white text-[16] font-bold rounded-md max-w-max max-h-min ${position === 'center' ? 'mx-auto' : position === 'right' ? 'ml-auto' : ''}`

    return  <button
            className={classes}
            type='button'
            onClick={onClick}
            {...props}>
            {children}
        </button>
}
