import React from 'react'
import { Outlet, useLoaderData } from 'react-router'
import Sidebar from '../components/fragment/sidebar/Sidebar'
import HeaderFragment from '../components/fragment/header/HeaderFragment'

const UserLayout = () => {
    const user = useLoaderData()
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-74 z-50 ">
                <Sidebar data={user} />
            </div>
            <div className="grid grid-cols-5 w-full h-screen">
                <div className=""></div>
                <div className="col-span-4">
                    {/* <HeaderFragment data={user}/> */}
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserLayout