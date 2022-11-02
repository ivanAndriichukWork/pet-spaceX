import React, {ReactNode} from "react";
import {Link as GatsbyLink} from "gatsby";

interface LayoutProps {
    children?: ReactNode,
    backType?: boolean,
    href?: string
}

export const Link = ({children, backType, href}: LayoutProps) => {
    return <GatsbyLink className='text-cyan-600'
                       to={backType ? `/` : href ? href : '#'}> {backType ? `← Back` : children}</GatsbyLink>
}
