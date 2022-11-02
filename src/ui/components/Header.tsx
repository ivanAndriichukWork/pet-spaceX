import React from "react";
import {Button} from "../index";
import {getUser, logout} from "../../api";

export const Header = () => {

    return <div
        className='flex  py-2.5 px-9 align-center justify-between'>
        <div className='text-xl font-bold'>Hello {getUser().username}</div>
        <Button
            isMain={false}
            position={'right'}
            onClick={() => {
                logout()
            }
            }>Log out
        </Button>
    </div>
}
