import React from "react";
// import { BottomNavBar } from '@/Components/BottomNavbar/BottomNavbar'
import useRoutes from "@/features/Hooks/Routes/Routes";
import Link from "next/link";
import styles from "./Earnings.module.css";
// import PieChart from '@/components/Chart/PieChart'
import BarChart from "@/components/Chart/BarChart";
import { CancelChart } from "@/components/Chart/Chart";
import { TaskNav } from "@/components/BottomNavbar/TaskNav";

const Earnings = () => {
  const { handleEarningsRoute } = useRoutes();
  return (
    <div>
      <div className={styles.Container}>
        <h1>Earnings</h1>

        <CancelChart />

        <div className={styles.Cont}>
          <h2>Today{`'`}s Activity</h2>
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
      <TaskNav />
    </div>
  );
};

export { Earnings };
