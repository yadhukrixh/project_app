"use client";
import React, { useState } from 'react';
import styles from './data-chart-wrapper.module.scss';
import DataChart from '../data-chart/data-chart';
import MonthNavigator from '../month-navigator/month-navigator';

const DataChartWrapper = () => {
  const [date,setDate] = useState<string>();
  return (
    <div className={styles.dataChartWrapper}>
        <div className={styles.heading}>
            <h2>性別・年代比</h2>
            <div className={styles.datePicker}>
                <MonthNavigator setChoosenDate={setDate}/>
            </div>
        </div>
        <>
            <DataChart />
        </>
    </div>
  )
}

export default DataChartWrapper
