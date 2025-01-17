import React from "react";
import styles from "./data-card.module.scss";
import Icons from "@/themes/icons/icons";

interface DataCardProps {
  mainData?: string;
  subData?: string;
  netPercentage?: string;
  netStatus?: "up" | "down" | "neutral";
  cardType:
    | "totalUsers"
    | "activeUsers"
    | "retentionRate"
    | "averageSearches"
    | "lotteryUses"
    | "accountDeletions";
}

const DataCard: React.FC<DataCardProps> = ({
  mainData,
  subData,
  netPercentage = "0",
  netStatus = "neutral",
  cardType,
}) => {
  // Predefine the labels and headings
  let mainLabel = "";
  let mainHeading = "";
  let subHeading = "";
  let description = "";

  switch (cardType) {
    case "totalUsers":
      mainLabel = "人";
      mainHeading = "ユーザー登録数累計";
      description = "人 (前月時点の累計）";
      break;
    case "activeUsers":
      mainLabel = "人 / 今月";
      mainHeading = "アクティブユーザー";
      subHeading = "2024年2月1日 - 2024年2月5日";
      description = "人 (前月時点の累計)";
      break;
    case "retentionRate":
      mainLabel = "% / 前月";
      mainHeading = "定着率";
      subHeading = "2024年1月1日 - 2024年1月31日";
      description = "% (前々月）";
      break;
    case "averageSearches":
      mainLabel = "回 / 今月";
      mainHeading = "平均検索回数";
      subHeading = "2024年2月1日 - 2024年2月5日";
      description = "回 (前月の今日時点）";
      break;
    case "lotteryUses":
      mainLabel = "回 / 今月";
      mainHeading = "抽選利用回数";
      subHeading = "2024年2月1日 - 2024年2月5日";
      description = "回 (前月の今日時点）";
      break;
    case "accountDeletions":
      mainLabel = "人 / 今月";
      mainHeading = "アカウント削除数";
      subHeading = "2024年2月1日 - 2024年2月5日";
      description = "人 (前月の今日時点）";
      break;
  }

  return (
    <div className={styles.dataCardWrapper}>
      <div className={styles.heading}>
        <h2 className={styles.mainHeading}>{mainHeading}</h2>
        <h2 className={styles.subHeading} style={{fontWeight:"300"}}>{subHeading}</h2>
      </div>

      <div className={styles.mainDataContainer}>
        <h2 className={styles.mainData}>
          <span className={styles.mainDataContent}>{mainData ? mainData : "-"}</span>
          {mainLabel}
        </h2>
        <div className={styles.additionalDetails}>
          <p className={styles.description}>
            {subData ? subData : "-"}
            {description}
          </p>
          <span className={`${styles.netStatus} ${styles[netStatus]}`}>
            <span className={styles.percentageIcon}>
              {netStatus !== "neutral" ?( netStatus === "up" ?  Icons.growUp : Icons.shrinkDown) : ""}
            </span>
            <p>{netPercentage ? netPercentage : "0"}%</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
