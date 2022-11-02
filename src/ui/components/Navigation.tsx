import React from "react";
import {MenuList} from "../../types/types";
import {MenuItem} from "./MenuItem";

interface Props {
    data: Data[]
    currentGroup:string
}

type Data = {
    title: string,
    values: MenuList[]
}
export const Navigation = ({data, currentGroup}: Props) => {
    return <nav style={{
        boxShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 55px'
        // filter: 'drop-shadow(0px 0px 55px rgba(255, 255, 255, 0.3))'
    }
    } className='bg-[#000200] h-full px-5 pt-11'>
        {data.map(({title, values}: Data) =>
            <MenuItem thisGroup={currentGroup} key={title} title={title} values={values}/>
        )}
    </nav>
}
