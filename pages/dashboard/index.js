import { BottomNavbar } from '@/components/BottomNavbar'
import { Home } from '@/Components/Dashboard/Home'
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