import React , {useState} from "react"
import {MenuList, BodyRocketData, BodyMissionData, BodyShipData} from "../../types/types";
import {MyGlobalContext, GlobalContext} from '../../context'
import {Col, Row, Body ,Navigation, Header} from "../index";

interface NavData {
    title: string,
    values: MenuList[]
}

export const Home = (props: any) => {
    const [currentItem, setCurrentItem] = useState<string>(''),
        [currentGroup, setCurrentGroup] = useState<string>('')
    let navData: NavData[] = [],
        rocketData: BodyRocketData[] = [],
        missionData: BodyMissionData[] = [],
        shipData: BodyShipData[] = []

    for (const [key, value] of Object.entries<any>(props.data)) {
        navData.push({
            title: key,
            values: value
        } as NavData)
        value.forEach((item: MenuList) => {
            if (key === 'rockets') {
                rocketData.push({
                    path: key,
                    id: item!.id,
                    name: item!.name!,
                    height: item!.height?.meters!,
                    diameter: item!.diameter?.meters!,
                    mass: item!.mass?.kg!,
                } as BodyRocketData)
            }
            if (key === 'missions') {
                let mass_max: number = 0,
                    mass_min: number = 1000000,
                    mass_total: number = 0;
                item!.payloads?.forEach((payload) => {
                    if (payload?.payload_mass_kg! > mass_max) {
                        mass_max = payload?.payload_mass_kg!
                    }
                    if (payload?.payload_mass_kg! != null && payload?.payload_mass_kg! < mass_min) {
                        mass_min = payload?.payload_mass_kg!
                    }
                    mass_total += payload?.payload_mass_kg! != null ? payload?.payload_mass_kg! : 0
                })
                missionData.push({
                    path: key,
                    id: item!.id,
                    name: item!.name!,
                    payloads_length: item!.payloads?.length,
                    payload_mass_max: mass_max!,
                    payload_mass_min: mass_min!,
                    payload_mass_total: mass_total!,
                } as BodyMissionData)
            }
            if (key === 'ships') {
                shipData.push({
                    path: key,
                    id: item!.id,
                    name: item!.name!,
                    image: item!.image!,
                    year_build: item!.year_built!,
                } as BodyShipData)
            }
        })
    }

    return (
        <MyGlobalContext.Provider value={{currentItem, setCurrentItem}}>
            <GlobalContext.Provider value={{currentGroup, setCurrentGroup}}>
                <div className={'h-full min-h-[100vh]'}>
                    <Row>
                        <Col className={'h-min'} width={100}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row className={`min-h-[94.2vh]`}>
                        <Col className={'z-10'} width={16}>
                            <Navigation currentGroup={currentGroup} data={navData}/>
                        </Col>
                        <Col width={84}>
                            <Body
                                currentGroup={currentGroup}
                                rocketData={rocketData.filter((v) => v.id === currentItem)}
                                missionData={missionData.filter((v) => v.id === currentItem)}
                                shipData={shipData.filter((v) => v.id === currentItem)}
                            />
                        </Col>
                    </Row>
                </div>
            </GlobalContext.Provider>
        </MyGlobalContext.Provider>
    )
}
