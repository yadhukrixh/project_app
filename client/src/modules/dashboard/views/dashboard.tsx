"use client";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import DataCard from "../components/data-card/data-card";
import DataChartWrapper from "../components/data-chart-wrapper/data-chart-wrapper";
import { DashboardServicesData } from "@/interfaces/dashboard/dashboard";
import UseDashboardServices from "../services/dashboard-services";

const Dashboard = () => {
  const [dashboardData, setDashBoardData] = useState<DashboardServicesData>();
  const fetchData = async () => {
    try {
      const response = await UseDashboardServices().fetchDashboardData();
      setDashBoardData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.dashboardWrapper}>
      {/* Cards at the top */}
      <div className={styles.cardsTop}>
        <DataCard
          cardType="totalUsers"
          mainData={dashboardData?.totalUsers.mainData}
          subData={dashboardData?.totalUsers.subData}
          netPercentage={dashboardData?.totalUsers.netPercentage}
          netStatus={dashboardData?.totalUsers.netStatus}
        />
        <DataCard
          cardType="activeUsers"
          mainData={dashboardData?.activeUsers.mainData}
          subData={dashboardData?.activeUsers.subData}
          netPercentage={dashboardData?.activeUsers.netPercentage}
          netStatus={dashboardData?.activeUsers.netStatus}
        />
        <DataCard
          cardType="retentionRate"
          mainData={dashboardData?.retentionRate.mainData}
          subData={dashboardData?.retentionRate.subData}
          netPercentage={dashboardData?.retentionRate.netPercentage}
          netStatus={dashboardData?.retentionRate.netStatus}
        />
        <DataCard
          cardType="averageSearches"
          mainData={dashboardData?.averageSearches.mainData}
          subData={dashboardData?.averageSearches.subData}
          netPercentage={dashboardData?.averageSearches.netPercentage}
          netStatus={dashboardData?.averageSearches.netStatus}
        />
        <DataChartWrapper />
        <DataCard
          cardType="lotteryUses"
          mainData={dashboardData?.lotteryUses.mainData}
          subData={dashboardData?.lotteryUses.subData}
          netPercentage={dashboardData?.lotteryUses.netPercentage}
          netStatus={dashboardData?.lotteryUses.netStatus}
        />
        <DataCard
          cardType="accountDeletions"
          mainData={dashboardData?.accountDeletions.mainData}
          subData={dashboardData?.accountDeletions.subData}
          netPercentage={dashboardData?.accountDeletions.netPercentage}
          netStatus={dashboardData?.accountDeletions.netStatus}
        />
      </div>
    </div>
  );
};

export default Dashboard;
