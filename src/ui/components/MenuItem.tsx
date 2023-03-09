import React, {useState} from "react";
import {Title} from "../index";
import {MenuList} from "../../types/types";
import {Link} from "gatsby";
import {useGlobalContext , useGroup } from "../../context";
import { RocketIcon, MissionsIcon ,ShipsIcon , ArrowIcon} from '../../images/icons/'

type Data = {
    title: string,
    values: MenuList[]
    thisGroup: string
}

export const MenuItem = ({title, values}: Data) => {
    const { setCurrentGroup }=useGroup()
    const [isActive, setIsActive] = useState(false)
    const { setCurrentItem }=useGlobalContext()

    const svgFill = !isActive ? '#2E85E5' : '#fff'

    return <div>
        <div className={`px-4 flex py-3 items-center cursor-pointer rounded-xl group ${isActive?'bg-[#2E85E5]':''} `}
             onClick={() => {
                 setIsActive(!isActive)
                 setCurrentGroup(!isActive ? title : '')
             }}>

            <div className={'block mr-4'}>
                {title === 'rockets'?
                    <RocketIcon fill={svgFill}/> :
                    title === 'missions'?
                        <MissionsIcon fill={svgFill}/> :
                        title === 'ships'?
                            <ShipsIcon fill={svgFill}/> :
                            <MissionsIcon fill={svgFill}/>}
            </div>
            <Title
                className={!isActive ? 'group-hover:text-[#2E85E5]' : 'group-hover:text-[#000200]' }

                size='menu'>{title}</Title>
            <div className={`ml-auto`} style={{
                transform: `rotate(${!isActive ? 0: 180}deg)`
            }}>
                <ArrowIcon fill={svgFill}/>
            </div>
        </div>
        {isActive ?
            <ul>{values.map((item: MenuList) => {
                const {name, id , mission_name} = item
                return (<li key={id}
                            onMouseOver={() => {
                                setCurrentItem(id)
                            }}
                            className='group'>
                    <Link
                        className='pl-[60px] text-[14px] rounded-md py-3 block text-white hover:text-[#2E85E5]'
                        to={`/${title}/${id}`} key={id}>
                        {name ? name : mission_name}
                    </Link>
                </li>)
            })}</ul>
            : ''}
    </div>

}
