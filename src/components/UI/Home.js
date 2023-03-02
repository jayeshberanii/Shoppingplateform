import React from 'react'
import { Outlet } from 'react-router'

import Topbar from '../layout/Topbar'

function Home() {
  return (
    <>
        <Topbar/>
        <Outlet/>
    </>
  )
}

export default Home