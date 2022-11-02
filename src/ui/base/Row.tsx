import React, {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode,
    className?: string
}

export const Row = ({children , className}: LayoutProps) => {
    return <div className={`flex flex-wrap ${className ? className  : ""}`}>
        {children}
    </div>
}
