"use client";
import React, { useState } from "react";
import styles from "./reset-password.module.scss";
import ButtonComponent from "@/themes/components/button-component/button-component";
import InputComponent from "@/themes/components/input-component/input-component";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showError,setShowError] = useState<boolean>(true);
  return (
    <div className={styles.resetPasswordWrapper}>
      <div className={styles.heading}>
        <h2>パスワード設定</h2>
        <p>
          パスワードを入力後 [設定ボタン] を押してサービスの
          利用を開始してください。
        </p>
      </div>

      <div className={styles.resetPasswordForm}>
        <div className={styles.inputField}>
          <h3>パスワード</h3>
          <InputComponent
            value={resetPassword}
            onChange={setResetPassword}
            placeholder="Enter new password"
            type="password"
            showEyeToggle={true}
          />
          <p className={styles.passwordRequirements}>
            半角大文字・小文字・数字を含めた8文字以上20文字以内
          </p>
        </div>
        <div className={styles.inputField}>
          <h3>パスワード確認用</h3>
          <InputComponent
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Enter new password again"
            showEyeToggle={true}
          />
          {showError && <p className={styles.error}>パスワードが一致していません</p>}
        </div>
        <ButtonComponent label="ログイン" onClick={() => {}} />
      </div>
    </div>
  );
};

export default ResetPassword;
