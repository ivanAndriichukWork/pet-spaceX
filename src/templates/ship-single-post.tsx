import * as React from "react";
import {InfoWrapper, Title, Link, InfoItem, ImgItem, Col, Row} from "../ui";

type Data = {
    data: {
        spacex: {
            ship: {
                id: string
                image: string
                name: string
                model: string
                mmsi: string
                imo: string
                missions: Mission[]
            }
        }
    }
}

type Mission = {
    name: string,
    flight: string,
}

const ShipSinglePost = ({pageContext}: Data) => {
    const {
        image,
        name,
        model,
        mmsi,
        imo,
        missions,
    } = pageContext.ship
    return (
        <InfoWrapper>
            <Title size={'big'} isCenter={true}>{name}</Title>
            <Row>
                <Col width={50}>
                    <InfoItem title={'Model'}>{model}</InfoItem>
                    <InfoItem title={'MMSI'}>{mmsi}</InfoItem>
                    <InfoItem title={'IMO'}>{imo}</InfoItem>
                    {missions ? <InfoItem title={'Missions'}>
                        <ul>{missions.map(({name, flight}) => <li>{name} /
                            flight: {flight}</li>)}</ul>
                    </InfoItem> : ''}
                </Col>
                <Col width={50}>
                    {<ImgItem src={image} alt={name}/>}
                </Col>
            </Row>
            <Link backType={true}/>
        </InfoWrapper>
    )
}

export default ShipSinglePost