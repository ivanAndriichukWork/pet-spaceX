import React, {ReactNode} from "react";

interface LayoutProps {
    children:ReactNode,
    size?: 'big'| 'mid' |'menu' | null,
    isCenter?: boolean,
    onClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined,
    className?: string
}

export const Title = ({isCenter, size, children , className , onClick}:LayoutProps) => {

    let classes: string = `${isCenter ? 'text-center' : ''} ${className ? className : ''} `

    switch (size) {
        case 'menu' : {
            classes += 'text-[13px] block font-bold capitalize text-white cursor-pointer'
            return <span onClick={onClick} className={classes}>{children}</span>
        }
        case 'big' : {
            classes += ' text-[34px]'
            return <h1 className={classes}>{children}</h1>
        }
        case 'mid' : {
            classes += ' text-[22px]'
            return  <h2 className={classes}>{children}</h2>
        }
        default : {
            classes += ' text-[17px]'
            return <h3 onClick={onClick} className={classes}>{children}</h3>
        }
    }
}
