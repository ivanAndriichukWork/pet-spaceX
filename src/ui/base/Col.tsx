import React, {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode,
    width?: Width,
    className? : string
}

type Width = 50 | 75 | 25 | 66 | 33 | 100 | 20 | 80 | 16 | 84

export const Col = ({children, width, className, ...props}: LayoutProps) => {
    let size = ''

    switch (width) {
        case 16 :
            size = 'w-1/6'
            break
        case 84 :
            size = 'w-5/6'
            break
        case 50 :
            size = 'w-2/4'
            break
        case 20 :
            size = 'w-1/5'
            break
        case 80 :
            size = 'w-4/5'
            break
        case 75 :
            size = 'w-3/4'
            break
        case 25 :
            size = 'w-1/4'
            break
        case 66 :
            size = 'w-2/4'
            break
        case 33 :
            size = 'w-2/4'
            break
        case 100 :
            size = 'w-full'
    }

    return <div
        className={`${className ? className : ''} ${size}`}
        {...props}
    >
        {children}
    </div>
}
