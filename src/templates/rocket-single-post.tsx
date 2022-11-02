import * as React from "react";
import {graphql} from "gatsby";
import {Header, Layout , Title , InfoItem, Link} from "../ui";

type Data = {
    data: {
        spacex: {
            rocket: {
                name: string,
                active: boolean,
                boosters: string,
                company: string,
                country: string,
                cost_per_launch: string,
                description: string,
                first_flight: string,
                wikipedia: string,
            }
        }
    }
}


const RocketSinglePost = ({ data }:Data) => {
   const {
       name,
       active,
       boosters,
       company,
       country,
       cost_per_launch,
       description,
       first_flight,
       wikipedia
   } = data.spacex.rocket
    return (
        <Layout>
            <Header/>
            <Title size={'big'} isCenter={true}>{name}</Title>
            <InfoItem title={'First Flight'}>{first_flight}</InfoItem>
            <InfoItem title={'Active'}>{active ? 'Yes' : 'No'}</InfoItem>
            <InfoItem title={'Boosters'}>{boosters}</InfoItem>
            <InfoItem title={'Company'}>{company}</InfoItem>
            <InfoItem title={'Country'}>{country}</InfoItem>
            <InfoItem title={'Cost Per Launch'}>{cost_per_launch}</InfoItem>
            <InfoItem title={'Description'}>{description}</InfoItem>
            <InfoItem title={'wikipedia'}><Link href={wikipedia}>{name}</Link></InfoItem>
            <Link backType={true} />
        </Layout>
)}

export default RocketSinglePost

export const rocket = graphql`
query RocketQuery($id: ID!) {
  spacex {
    rocket(id: $id) {
    wikipedia
      active
      boosters
      company
      country
      cost_per_launch
      description
      name
      first_flight
    }
  }
}
`
