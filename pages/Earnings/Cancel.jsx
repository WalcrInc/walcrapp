import React from 'react'
import styles from './Cancel.module.css'
import { CancelChart } from '@/components/Chart/Chart'

const Cancel = () => {
  return (
    <div>
        <div className={styles.Header}>
            Cancellation
        </div>
      <CancelChart />

      <div className={styles.Container}>
        <div className={styles.cancelled}>
        <p className={styles.user}>You Cancelled</p>
        <p>70</p>
        </div>

        <div className={styles.cancelled}>
        <p className={styles.client}>Client Cancelled</p>
        <p>30</p>
        </div>
      </div>
    </div>
  )
}

export default Cancel;
