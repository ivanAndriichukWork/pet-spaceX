import React from 'react'
import {LogoIcon} from "../../images/icons";
// @ts-ignore
import backgroundImg from "../../images/mission_feature_1.png";

export const StartFrame = ()=>{
    return         <div className={`relative text-white text-center pt-[20vh] w-full h-full`}>
        <img className={`z-[-1] absolute w-full h-full top-0 left-0 right-0 bottom-0`} src={backgroundImg}
             alt="bg"/>
        <div className={`max-w-[527px] leading-6 mx-auto`}>
            <p className={`flex align-center justify-center mb-[35px]`}>
                <LogoIcon/>
            </p>
            <p>“You want to wake up in the morning and think the future is going to be great - and that’s what being a
                spacefaring civilization is all about. It’s about believing in the future and thinking that the future
                will be better than the past. And I can’t think of anything more exciting than going out there and being
                among the stars.”
            </p>
            <p>-Elon Musk</p>
        </div>
    </div>
}
