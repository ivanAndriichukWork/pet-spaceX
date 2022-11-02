import React, {ReactNode} from "react";

interface LayoutProps {
    children:ReactNode
}

export const Layout = ({children}:LayoutProps) => {
    return <div className='mx-auto min-h-[100vh]'>
        {children}
    </div>
}
