import React from "react";
import {BodyMissionData} from '../../types/types'
import {Row} from "../base/Row";
import {Col} from "../base/Col";

interface LayoutProps {
    data: BodyMissionData[]
}

export const Missions = ({data}: LayoutProps) => {
    const isData: boolean = !!data && !!data[0] && !!data[0]!,
        payloadsLength: number = isData ? data[0]!.payloads_length! : 0,
        payloadsMax: number = isData ? data[0]!.payload_mass_max! : 0,
        payloadsMin: number = isData ? data[0]!.payload_mass_min! : 0,
        payloadsTotal: number = isData ? data[0]!.payload_mass_total! : 0;

    return <main className={`bg-[#000200] w-full h-full`}>
        <Row className={`justify-between h-max`}>
            <Col
                className={`relative flex text-center flex-col items-center justify-center mx-6 my-10 w-[46%] rounded-3xl bg-[#DAE7FF] h-[340px]`}>
                <p className={`font-bold mb-[40px] text-[#2E85E5] leading-none text-[100px]`}><b>{payloadsLength}</b>
                </p>
                <p className={`font-bold text-[25px]`}>Number of flights</p>
            </Col>
            <Col
                className={`relative flex text-center flex-col items-center justify-center mx-6 my-10 w-[46%] rounded-3xl bg-[#DAE7FF] h-[340px]`}>
                <p className={`font-bold mb-[40px] text-[#2E85E5] leading-none text-[100px]`}><b>{payloadsMin}kg</b></p>
                <p className={`font-bold text-[25px]`}>Minimum weight per trip</p>
            </Col>
        </Row>
        <Row className={`justify-between h-max`}>
            <Col
                className={`relative flex text-center flex-col items-center justify-center mx-6 my-10 w-[46%] rounded-3xl bg-[#DAE7FF] h-[340px]`}>
                <p className={`font-bold mb-[40px] text-[#2E85E5] leading-none text-[100px]`}><b>{payloadsTotal}kg</b>
                </p>
                <p className={`font-bold text-[25px]`}>Total weight of the shipped cargo</p>
            </Col>
            <Col
                className={`relative flex text-center flex-col items-center justify-center mx-6 my-10 w-[46%] rounded-3xl bg-[#DAE7FF] h-[340px]`}>
                <p className={`font-bold mb-[40px] text-[#2E85E5] leading-none text-[100px]`}><b>{payloadsMax}kg</b></p>
                <p className={`font-bold text-[25px]`}>Maximum weight per trip</p>
            </Col>
        </Row>
    </main>
}
