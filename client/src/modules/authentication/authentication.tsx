"use client";
import React, { useState } from "react";
import styles from "./authentication.module.scss";
import Login from "./components/login/login";
import ForgotPassword from "./components/forgot-password/forgot-password";

const Authentication = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  return (
    <div className={styles.authenticationWrapper}>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <ForgotPassword setShow={setShowLogin}/>}
    </div>
  );
};

export default Authentication;
