import ResetPassword from "@/modules/reset-password/views/reset-password";
import NavigationHeader from "@/themes/components/navigation-header/navigation-header";
import React from "react";
import styles from './reset-password.module.scss';

export default function page() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ position: "absolute", top: "0px", width: "100%" }}>
        <NavigationHeader />
      </div>
      <div className={styles.resetPassword}>
        <ResetPassword />
      </div>
    </div>
  );
}
