'use client'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AdminSidebarState } from "@/components/redux/action";


const AdminHeader = () => {
    const adminSidebar = useSelector(state => state.adminSidebar);
    const dispatch = useDispatch();


    const dispatchAdminSidebarState = () => {
        dispatch(AdminSidebarState(!adminSidebar))
    }

    return (
        <>
            <div className="w-full bg-orange-200">
                <div className="flex flex-row items-center justify-between p-4 w-full">
                    <div>
                        {adminSidebar ? (
                            <img onClick={dispatchAdminSidebarState} src="/icons/closewindow.png" className="cursor-pointer w-6" />

                        ) : (
                            <img onClick={dispatchAdminSidebarState} src="/icons/burgermenu.png" className="cursor-pointer w-6" />
                        )}
                    </div>

                    <div>
                        <h1>Nabaraj</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHeader;