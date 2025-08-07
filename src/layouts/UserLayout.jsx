import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/fragment/sidebar/Sidebar'

const UserLayout = () => {
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-74 z-50 ">
                <Sidebar />
            </div>
            <div className="grid grid-cols-5 w-full h-screen">
                <div className=""></div>
                <div className="col-span-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserLayout