import React from 'react'
import { BottomNavbar } from '@/Components/BottomNavbar'
import { Profile } from '@/Components/container/Dashboard/Profile'

const profile = () => {
  
  return (
    <div>
      <Profile/>
      <BottomNavbar/>
    </div>
  )
}

export default profile