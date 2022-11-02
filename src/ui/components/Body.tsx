import React from "react";
import {BodyData, BodyMissionData, BodyRocketData, BodyShipData} from '../../types/types'
import {Rockets} from "./Rockets";
import {StartFrame} from "./StartFrame";
import {Missions} from "./Missions";
import {Ships} from "./Ships";

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
