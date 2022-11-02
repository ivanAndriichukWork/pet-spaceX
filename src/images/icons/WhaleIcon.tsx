import React from "react";
import {SvgIconProps} from "./ShipsIcon";

export const WhaleIcon = ({fill}: SvgIconProps) => {
    return <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_12_1224" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="1" y="10" width="43" height="25">
            <path d="M15.0657 12.1875C5.86228 12.5156 4.38384 19.6931 4.79447 23.2416C3.15103 26.19 3.65259 26.9259 4.88447 28.1541C11.0476 33.8869 22.5498 33.4772 27.8907 31.4306C33.4782 29.1375 36.3273 24.8203 36.6001 22.5C41.5313 19.2244 41.6307 13.6884 40.9463 12.1875C40.2151 13.4156 38.1067 14.3175 36.601 15C34.9576 15.3281 32.5932 14.0981 31.9088 13.0059C31.4382 15.4688 31.9088 17.3438 33.1407 18.3291C35.2857 19.9669 34.1954 21.6216 33.7848 22.0312C32.0073 23.8031 28.6229 22.9594 26.9785 20.3756C22.5498 13.4156 17.8032 12.1875 15.0657 12.1875Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.6875 26.25C7.34344 26.7488 12.5625 27.7069 15.9375 25.3125" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.25 20.625C12.2855 20.625 13.125 19.7855 13.125 18.75C13.125 17.7145 12.2855 16.875 11.25 16.875C10.2145 16.875 9.375 17.7145 9.375 18.75C9.375 19.7855 10.2145 20.625 11.25 20.625Z" fill="black"/>
        </mask>
        <g mask="url(#mask0_12_1224)">
            <path d="M0 0H45V45H0V0Z" fill={fill ? fill : 'black'}/>
        </g>
    </svg>

}
