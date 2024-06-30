import { BottomNavbar } from 'Src/components/BottomNavbar'
import { Home } from 'src/App/Dashboard/Home'
import React from 'react'

const dashboard = () => {
  return (
    <div>
        <Home/>
        <BottomNavbar/>
    </div>
  )
}

export default dashboard