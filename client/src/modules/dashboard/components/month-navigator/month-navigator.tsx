"use client";
import Icons from "@/themes/icons/icons";
import React, { useEffect, useState } from "react";
import styles from "./month-navigator.module.scss";

interface DatePickerProps{
    setChoosenDate:(date:string) => void;
}

const MonthNavigator:React.FC<DatePickerProps> = ({setChoosenDate}) => {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState<string>();
  const [month, setMonth] = useState<string>();

  const formatMonthYear = (date: Date) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "2-digit" });
    setYear(year.toString());
    setMonth(month);
    setChoosenDate(`${year}-${month}`);
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
      formatMonthYear(newDate);
      return newDate;
    });
  };

  useEffect(() => {
    formatMonthYear(date);
  }, []);

  return (
    <div className={styles.monthNavigator}>
      {year}年
      <div className={styles.month}>
        <button
          onClick={() => handleMonthChange("prev")}
          className={styles.navigationButtonLeft}
        >
          {Icons.arowLeft}
        </button>
        <span className="text-xl font-normal">{month}月</span>
        <button
          onClick={() => handleMonthChange("next")}
          className={styles.navigationButtonRight}
        >
          {Icons.arowRight}
        </button>
      </div>
    </div>
  );
};

export default MonthNavigator;
