import React from "react"
import {Outlet} from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <h1 className="link-van">Dashboard goes here</h1>
            <Outlet />
        </>
    )
}