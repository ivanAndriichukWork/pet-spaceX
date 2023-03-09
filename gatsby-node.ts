import type {GatsbyNode} from "gatsby"
import {Data} from "./src/types/types";

import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
                                                                 graphql,
                                                                 actions
                                                             }) => {
    const {createPage} = actions

    const {data} = await graphql<Data>(`
    query Pages {
      spacex {
        rockets {
            id
        }
        launches {
          id
        }
        ships {
          missions {
            name
            flight
          }
          id
          image
          name
          model
          mmsi
          imo
        }
      }
    }`)
    const {rockets, launches, ships} = data?.spacex!

    rockets.forEach((rocket) => {
        const {id} = rocket;
        createPage({
            path: `/rockets/${id}`,
            component: path.resolve('src/templates/rocket-single-post.tsx'),
            context: {id}
        })
    })

    launches.forEach((launches) => {
        const {id} = launches;
        createPage({
            path: `/launches/${id}`,
            component: path.resolve('src/templates/mission-single-post.tsx'),
            context: {id}
        })
    })

    ships.forEach((ship, index) => {
        const {id} = ship;
        createPage({
            path: `/ships/${id}`,
            component: path.resolve('src/templates/ship-single-post.tsx'),
            context: {
                ship: ship
            }
        })
    })

}

