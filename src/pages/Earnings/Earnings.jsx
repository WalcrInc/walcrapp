import { BottomNavBarTwo } from "@/components/BottomNavbar/BottomNavbar";
import React from "react";
import useRoutes from "@/features/Hooks/Routes/Routes";
import BarChart from "@/components/Chart/BarChart";
import styles from "./Earnings.module.css";
import { CancelChart } from "@/components/Chart/Chart";
import Link from "next/link";

const Earnings = () => {
  const { handleEarningsRoute } = useRoutes();
  return (
    <div>
      <div className={styles.Container}>
        <h1>Earnings</h1>

        <CancelChart />

        <div className={styles.Cont}>
          <h2>Today&apos;s Activity</h2>
          <div className={styles.Activity}>
            <div>
              <p>Earnings</p>
              <p>$500</p>
            </div>
            <div>
              <p>Online</p>
              <p>12hrs 20mins</p>
            </div>
            <div>
              <p>Task</p>
              <p>4</p>
            </div>
          </div>
        </div>

        <div className={styles.chartCont}>
          <Link href={"/hours"}>Weekly task Chart {">"}</Link>
          <BarChart />
        </div>
      </div>
      <BottomNavBarTwo />
    </div>
  );
};

export default Earnings;
