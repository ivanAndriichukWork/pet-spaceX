import React, {useState} from "react";
import {Row} from "../base/Row";
import {Col} from "../base/Col";
import { BodyRocketData} from '../../types/types'
import {WhaleIcon} from "../../images/icons/WhaleIcon";
// @ts-ignore
import liberty from "../../images/liberty-symbol.png";
// @ts-ignore
import rocket from "../../images/rocket.png";
// @ts-ignore
import tennis from "../../images/tennis-court.png";

interface LayoutProps {
    data: BodyRocketData[]
}

export const Rockets = ({data}: LayoutProps) => {
    const isData: boolean = !!data && !!data[0] && !!data[0]!,
        rocketLength: number = isData ? data[0]!.height! : 0,
        rocketRadius: number = isData ? data[0]!.diameter! : 0,
        rocketWeight: number = isData ? data[0]!.mass! : 0,
        maxQtyWhale = 60,
        arrWhale = [],
        imgHeight = 400,
        weightWhale = 30000,
        tennisCourt = {
            length: 23.77,
            width: 10.97
        },
        libertyH = 46,
        sizeCourt = {
            length: tennisCourt.length * 23,
            width: tennisCourt.width * 23
        };

    let blockH = rocketLength < libertyH ? (rocketLength / libertyH) * imgHeight : (libertyH / rocketLength) * imgHeight,
        roundRocket = (rocketRadius / tennisCourt.width) * (sizeCourt.width),
        qtyWhale = Math.floor(rocketWeight / weightWhale);


    for (let i = 0; i < maxQtyWhale; i++) {
        arrWhale.push(i)
    }

    return <main className={`bg-[#000200] w-full h-full `}>
        <Row className={`justify-between h-max min-h-[500px]`}>
            <Col className={`relative group mx-6 my-6 w-[40%] rounded-3xl bg-[#DAE7FF] h-[${imgHeight}px]`}>
                <div className={`hidden absolute flex-col group-hover:flex  text-white text-center pb-[50px] z-20 h-full w-full justify-end items-center`} style={{
                    background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 132.5%)'
                }}>
                    <p>Height of the rocket in comparison to the Statue of Liberty</p>
                    <p>Rocket height = <b className={`text-[#248AFD]`}>{rocketLength}</b> meters</p>
                    <p>Statue of Liberty height = <b className={`text-[#248AFD]`}>{libertyH}</b> meters</p>
                </div>
                <img src={liberty}
                     className='absolute right-[50%] bottom-[14px] ease-in-out'
                     style={{
                         height: libertyH < rocketLength ? `${blockH - 28}px` : imgHeight - 28,
                         zIndex: libertyH > rocketLength ? 0 : 1,
                         transition: `0.4s`
                     }}
                     alt=""/>
                <img src={rocket}
                     style={{
                         height: rocketLength > libertyH ? imgHeight - 28 : `${blockH - 28}px`,
                         zIndex: libertyH > rocketLength ? 1 : 0,
                         transition: `0.4s`
                     }}
                     className={`absolute left-[50%] bottom-[14px] ease-in-out`}
                     alt=""/>
            </Col>
            <Col className={`relative group mx-6 my-6 w-[51%] rounded-3xl bg-[#DAE7FF] h-[${imgHeight}px]`}>
                <div className={`hidden absolute flex-col group-hover:flex  text-white text-center pb-[50px] z-20 h-full w-full justify-end items-center`} style={{
                    background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 132.5%)'
                }}>
                    <p>Diameter of the rocket in comparison to the tennis court</p>
                    <p>Rocket diameter = <b className={`text-[#248AFD]`}>{rocketRadius}</b> meters</p>
                    <p>Tennis court width = <b className={`text-[#248AFD]`}>{tennisCourt.width}</b> meters</p>
                    <p>Tennis court length = <b className={`text-[#248AFD]`}>{tennisCourt.length}</b> meters</p>
                </div>
                <div className={`absolute left-[50%] z-1 top-[50%]`} style={{
                    width: `${sizeCourt.length}px`,
                    height: `${sizeCourt.width*1.3}px`,
                    transform: 'translate(-50% , -50%)'
                }}>
                    <img src={tennis} className={`w-full h-full`} alt="tennis court"/>
                </div>
                <div className={`absolute left-[50%] z-10 top-[50%]`} style={{
                    transform: 'translate(-50% , -50%)',
                    border: `5px solid #248AFD`,
                    borderRadius: '50%',
                    width: `${roundRocket}px`,
                    height: `${roundRocket}px`,
                    transition: `0.4s`,
                    boxShadow: '4px 4px 45px rgba(36, 138, 253, 0.5)',
                    background: 'rgba(36, 138, 253, 0.3)',
                }}/>

            </Col>
        </Row>

        <Row>
            <div className={`relative group rounded-3xl mx-6 my-10 px-9 py-5 flex bg-[#DAE7FF] flex-wrap w-full`}>
                <div className={`hidden absolute top-0 left-0 flex-col group-hover:flex  text-white text-center pb-[50px] z-20 h-full w-full justify-end items-center`} style={{
                    background: 'linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 132.5%)'
                }}>
                    <p>Weight of the rocket in comparison to the whale</p>
                    <p>Rocket weight = <b className={`text-[#248AFD]`}>{rocketWeight}</b> kg</p>
                    <p>Humpback whale weight = <b className={`text-[#248AFD]`}>{weightWhale}</b> kg</p>
                    <p>The rocket weighs like  <b className={`text-[#248AFD]`}>{qtyWhale}</b> whales</p>
                </div>
                {arrWhale.map((v, i) => {
                    return <div className={`w-[5%]`}>
                        <WhaleIcon key={i} fill={qtyWhale > i ? '#248AFD' : '#000000'}/>
                    </div>
                })}
            </div>
        </Row>
    </main>
}
