import React from 'react'
import { Outlet, useLoaderData } from 'react-router'
import Sidebar from '../components/fragment/sidebar/Sidebar'
import HeaderFragment from '../components/fragment/header/HeaderFragment'

const UserLayout = () => {
    const user = useLoaderData()
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-20 lg:w-74 z-50 ">
                <Sidebar data={user} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full lg:h-screen">
                <div className=""></div>
                <div className="col-span-2 ml-25 md:col-span-3 md:ml-30 lg:col-span-4 lg:ml-10 xl:ml-0">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserLayout