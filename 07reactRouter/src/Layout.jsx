import React from 'react'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import About from './componenets/About/About'
import { Outlet } from 'react-router'
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout