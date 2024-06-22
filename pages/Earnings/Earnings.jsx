// import { BottomNavbar } from '@/components/BottomNavbar'
import { BottomNavBarTwo } from '@/components/BottomNavbar/BottomNavbar'
import React from 'react'
import useRoutes from '@/hooks/Routes/Routes'
import PieChart from '@/components/Chart/Chart'


const Earnings = () => {
    const {handleEarningsRoute} = useRoutes();
  return (
    <div>
        <div>
            Earnings
            <PieChart />
        </div>
      <BottomNavBarTwo/>
    </div>
  )
}

export default Earnings
