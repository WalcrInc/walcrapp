import React from 'react'
import styles from './Cancel.module.css'
import { CancelChart } from 'Src/components/Chart/Chart'
import Nav from './BottomNav/Nav'
import { useRouter } from 'next/router';
import BackArrow from 'Src/components/Icon/BackArrow'

const Cancel = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
        <div className={styles.Header}>
          <BackArrow handleBack={handleBack}/>
          <p>
            Cancellation
          </p>
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

      <Nav />
    </div>
  )
}

export default Cancel;
