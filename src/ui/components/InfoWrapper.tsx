import React , {ReactNode} from "react";
import {isBrowser, isLoggedIn} from "../../api";
import {Layout, Login ,Header} from "../index";

interface LayoutProps {
    children?: ReactNode,
}


export const InfoWrapper = ({children}: LayoutProps) => {

    return (<>
            {isLoggedIn() && isBrowser() ?
                <Layout>
                    <Header/>
                    <div className={'bg-[#000200] text-[#fff] pt-11 px-5 min-h-[94.2vh] px-11'}>
                        {children}
                    </div>
                </Layout>
                :
                <Login/>}
        </>
    )
}