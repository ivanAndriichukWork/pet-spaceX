import * as React from "react"
import {Provider} from "react-redux"

import store from "./src/redux/store"

const Wrap = ({element}) => {

    return <Provider store={store}>{element}</Provider>
}

export default Wrap
