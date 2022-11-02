import React , {useState} from "react"
import {graphql, PageProps} from "gatsby"
import {Data} from "../types/types";
import {Home , Login ,Layout} from "../ui";
import store from "../redux/store";
import {isBrowser, isLoggedIn} from "../api";


// markup
const IndexPage = ({data}: PageProps<Data>) => {
    const [logged , setLogged] = useState(isBrowser() && isLoggedIn())
    store.subscribe(()=>setLogged(store.getState().logged))

    return (
            <Layout>
                { logged  ? <Home data={data.spacex}/> : <Login/>}
            </Layout>
    )
}

export default IndexPage

export const data = graphql`
query getData {
  spacex {
    rockets {
      id
      name
      first_flight
      diameter {
        meters
      }
      mass {
        kg
      }
      height {
        meters
      }
    }
    missions {
      id
      name
      payloads {
        payload_mass_kg
        payload_mass_lbs
      }
    }
    ships {
      year_built
      image
      id
      name
    }
  }
}
`
