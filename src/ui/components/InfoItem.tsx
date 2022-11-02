import React, {ReactNode} from "react";

interface LayoutProps {
    children:ReactNode,
    title: string,
}

export const InfoItem = ({children, title}:LayoutProps) => {
    return <div className='mx-20 mb-3 text-[#fff]'>
        <b>{title}</b>:
        {children}
    </div>
}
