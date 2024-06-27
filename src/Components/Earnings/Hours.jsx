import BarChart from 'Src/components/Chart/BarChart'
import React from 'react'
import styles from './Hero.module.css'
import Nav from './BottomNav/Nav'
import BackArrow from 'Src/components/Icon/BackArrow'
import Link from 'next/link'

const Hours = () => {
  return (
    <>
    <div>
      <div className={styles.Header}>
        <Link href={'/earnings'}>
        <BackArrow />
        </Link>
        Activity
      </div>
      <div className={styles.tab}>
        <button>Last week</button>
        <button className={styles.current}>Current week</button>
        <button>Past 3 months</button>
      </div>

      <div className={styles.tasks}>
        <button className={styles.current}>
        120hrs 20mins
        </button>
      </div>

      <div className={styles.Barchart}>
      <BarChart />
      </div>

    </div>
      <Nav />
      </>
  )
}

export default Hours