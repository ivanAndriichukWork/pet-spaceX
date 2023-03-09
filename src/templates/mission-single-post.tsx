import * as React from "react";
import {graphql} from "gatsby";
import { Title, Link, InfoItem, InfoWrapper} from "../ui";

type Data = {
    data: {
        spacex: {
            launch: {
                details: string,
                mission_name: string,
                id: string,
                links: {
                    wikipedia: string,
                }
                launch_site: {
                    site_name: string,
                }
            }
        }
    }
}

const MissionSinglePost = ({data}: Data) => {
    const {
        details,
        mission_name,
        launch_site,
        links,
    } = data.spacex.launch
    return (
        <InfoWrapper>
            <Title size={'big'} isCenter={true}>{mission_name}</Title>
            <InfoItem title={'Description'}> {details}</InfoItem>
            <InfoItem title={'Links'}>
                {links && links.wikipedia ? <><Link href={links.wikipedia}>Wikipedia</Link>,</> : ''}
                {launch_site && launch_site.site_name ? <><Link href={launch_site.site_name}>Web Site</Link></> : ''}
            </InfoItem>
            <Link backType={true}/>
        </InfoWrapper>

    )
}

export default MissionSinglePost

export const mission = graphql`
query MissionQuery($id: ID!) {
  spacex {
    launch(id: $id) {
      mission_name
      details
      links {
        wikipedia
      }
      id
      launch_site {
        site_name
      }
    }
  }
}
`
