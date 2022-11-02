import React from "react";
import {BodyShipData} from '../../types/types'
import {Row} from "../index";


interface LayoutProps {
    data: BodyShipData[]
}

export const Ships = ({data}: LayoutProps) => {
    const isData: boolean = !!data && !!data[0] && !!data[0]!,
        image: string = isData ? data[0]!.image! : '',
        yearBuild: number = isData ? data[0]!.year_build! : 0,
        startYear = 1970,
        thisYear = new Date().getFullYear(),
        qtyYears = Math.round((thisYear - startYear)),
        arrYear = []

    for (let i = 0; i <= qtyYears; i++) {
        arrYear.push(i)
    }

    return <main className={`bg-[#000200] relative w-full h-full`}>
        <Row className={'sticky top-[30px]'}>
            <div className={'mx-auto'}>
                <div
                    className={`group max-w-[800px] max-h-[600px] object-cover rounded-3xl overflow-hidden my-10  flex bg-[#DAE7FF] flex-wrap w-max`}>
                    <img src={image} alt=''/>
                </div>

            </div>
        </Row>
        <div className={'top-[80vh] sticky flex flex-row items-center justify-center'}>
            <div className={`relative text-white mx-[170px] h-[5px] w-full bg-white rounded-[5px]`}>
                <div className={`absolute top-[50%] translate-y-[-50%] left-[-70px]`}>{startYear}</div>
                <div style={{left: `${Math.round((100 / qtyYears) * (yearBuild - startYear))}%`}}
                     className={'absolute z-20 top-[50%] translate-y-[-50%] h-[95px] w-[95px] items-center justify-center flex flex-col bg-[#248AFD] rounded-[50%] text-white'}>
                    <span className={`text-[10px] font-bold`}>built in</span>
                    <span className={`text-[30px] font-bold`}>{yearBuild}</span>
                </div>
                <div className={`absolute top-[50%] translate-y-[-50%] right-[-70px]`}>{thisYear}</div>
                {arrYear.map((v, i) => {
                    return <div style={{left: `${((100 / (qtyYears)) * i)}%`}}
                                className={`absolute top-[50%] translate-y-[-50%] translate-x-[-50%] rounded-[50%] bg-[#248AFD] h-[12px] w-[12px]`}/>
                })}
            </div>
        </div>
    </main>
}
