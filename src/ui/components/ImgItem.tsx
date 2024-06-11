import React from "react";
import noImage from '../../images/no-photo-available.png'

interface LayoutProps {
    src: string,
    alt: string
}

export const ImgItem = ({src, alt}: LayoutProps) => {
    return <div>
        <img src={!!src ? src: noImage} alt={alt}/>
    </div>
}
