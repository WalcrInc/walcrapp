import BarChart from '@/components/Chart/BarChart'
import React from 'react'
import styles from './Tasks.module.css'
import Nav from './BottomNav/Nav'
import { useRouter } from 'next/router';
import BackArrow from '@/components/Icon/BackArrow'

const Tasks = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <div className={styles.Header}>
        <BackArrow handleBack={handleBack} />
        Activity
      </div>
      <div className={styles.tab}>
        <button>Last week</button>
        <button className={styles.current}>Current week</button>
        <button>Past 3 months</button>
      </div>

      <div className={styles.tasks}>
        <button className={styles.current}>
        200 task
        </button>
      </div>

      <div className={styles.Barchart}>
      <BarChart />
      </div>

      <Nav />
    </div>
  )
}

export default Tasks