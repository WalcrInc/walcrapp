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

      <div>
        <p>You Cancelled</p>
        <p>Client Cancelled</p>
      </div>
    </div>
  )
}

export default Cancel;
