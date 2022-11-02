import React from "react";
import {BodyMissionData, BodyRocketData, BodyShipData} from '../../types/types'
import {
    Ships,
    Missions,
    Rockets,
    StartFrame
} from "../index";

interface LayoutProps {
    currentGroup: string
    rocketData: BodyRocketData[]
    missionData: BodyMissionData[]
    shipData: BodyShipData[]
}

export const Body = ({
                         currentGroup,
                         rocketData,
                         missionData,
                         shipData
                     }: LayoutProps) => {

    return <main className={`relative w-full h-full`}>

        {currentGroup === '' ? <StartFrame/> : null}
        {currentGroup === 'rockets' ? <Rockets data={rocketData}/> : null}
        {currentGroup === 'missions' ? <Missions data={missionData}/> : null}
        {currentGroup === 'ships' ? <Ships data={shipData}/> : null}

    </main>
}
