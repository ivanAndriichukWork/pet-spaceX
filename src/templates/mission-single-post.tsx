import * as React from "react";
import {graphql} from "gatsby";
import {Header, Layout, Title, Link, InfoItem, Home, Login} from "../ui";
import {isBrowser, isLoggedIn} from "../api/someVariables";

type Data = {
    data: {
        spacex: {
            mission: {
                description: string,
                manufacturers: string[],
                name: string,
                twitter: string,
                website: string,
                wikipedia: string,
            }
        }
    }
}

const MissionSinglePost = ({data}: Data) => {
    const {
        description,
        manufacturers,
        name,
        twitter,
        website,
        wikipedia,
    } = data.spacex.mission
    return (
        <>
            {isLoggedIn() && isBrowser() ?
                <Layout>
                    <Header/>
                    <Title size={'big'} isCenter={true}>{name}</Title>
                    <InfoItem title={'Description'}> {description}</InfoItem>
                    <InfoItem
                        title={'Manufacturers'}> {manufacturers.length > 1 ? manufacturers.map((man: string) => `${man}; `) : manufacturers}</InfoItem>
                    <InfoItem title={'Links'}>
                        {wikipedia ? <><Link href={wikipedia}>Wikipedia</Link>,</> : ''}
                        {twitter ? <><Link href={twitter}>Twitter</Link>,</> : ''}
                        {website ? <><Link href={website}>Web Site</Link></> : ''}
                    </InfoItem>
                    <Link backType={true}/>
                </Layout>
                :
                <Login/>}
        </>
    )
}

export default MissionSinglePost

export const mission = graphql`
query MissionQuery($id: ID!) {
  spacex {
    mission(id: $id) {
      description
      manufacturers
      name
      twitter
      website
      wikipedia
    }
  }
}
`
