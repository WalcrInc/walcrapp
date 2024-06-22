// import { BottomNavbar } from '@/components/BottomNavbar'
import { BottomNavBarTwo } from '@/components/BottomNavbar/BottomNavbar'
import React from 'react'
import useRoutes from '@/hooks/Routes/Routes'
import PieChart from '@/components/Chart/Chart'
import BarChart from '@/components/Chart/BarChart'
import styles from './Earnings.module.css'


const Earnings = () => {
    const {handleEarningsRoute} = useRoutes();
  return (
    <div>
        <div className={styles.Container}>
          <h1>
            Earnings
          </h1>

            <PieChart />

            <div className={styles.Cont}>
              <h2>Today's Activity</h2>
              <div className={styles.Activity}>
                <div>
                  <p>
                    Earnings
                  </p>
                  <p>
                    $500
                  </p>
                </div>
                <div>
                  <p>
                    Online
                  </p>
                  <p>
                    12hrs 20mins
                  </p>
                </div>
                <div>
                  <p>
                    Task
                    </p>
                  <p>4</p>
                </div>
              </div>
            </div>

            <div className={styles.chartCont}>
              <p>Weekly task Chart {'>'}</p>
              <BarChart />
            </div>
        </div>
      <BottomNavBarTwo/>
    </div>
  )
}

export default Earnings
