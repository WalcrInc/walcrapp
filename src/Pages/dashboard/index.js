import { BottomNavbar } from '@/Components/BottomNavbar'
import { Home } from '@/Components/container/Dashboard/Home'
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