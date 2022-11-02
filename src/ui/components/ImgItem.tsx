import React from "react";

interface LayoutProps {
    src: string,
    alt: string
}

export const ImgItem = ({src, alt}: LayoutProps) => {
    return <div>
        <img src={src} alt={alt}/>
    </div>
}
