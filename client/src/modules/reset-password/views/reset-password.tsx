"use client";
import React, { useEffect, useState } from "react";
import styles from "./reset-password.module.scss";
import ButtonComponent from "@/themes/components/button-component/button-component";
import InputComponent from "@/themes/components/input-component/input-component";
import { validatePassword } from "@/utils/authentication-utils/validation";
import { delay } from "@/utils/common-utils/utils";
import UseAuthenticationServices from "@/modules/authentication/services/authentication-services";
import { message } from "antd";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleValidatePassword = (password: string) => {
    if (validatePassword(password)) {
      setPasswordError(undefined);
    } else {
      setPasswordError(
        "半角大文字・小文字・数字を含めた8文字以上20文字以内で入力してください"
      );
    }
  };

  const handlePasswordMatch = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  useEffect(() => {
    handleValidatePassword(resetPassword!);
  }, [resetPassword]);

  useEffect(() => {
    handlePasswordMatch(resetPassword!, confirmPassword!);
  }, [confirmPassword]);

  const handleSubmitNewPassword = async (
    resetPassword: string,
    confirmPassword: string
  ) => {
    setLoading(true);
    try {
      await delay(1000);
      const response = await UseAuthenticationServices().handleResetPassword(
        resetPassword,
        confirmPassword
      );
      if (response.status) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
            status={passwordError ? "error" : undefined}
          />
          {passwordError ? (
            <p className={styles.error}>{passwordError}</p>
          ) : (
            <p className={styles.passwordRequirements}>
              半角大文字・小文字・数字を含めた8文字以上20文字以内
            </p>
          )}
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
          {!passwordMatch && confirmPassword && (
            <p className={styles.error}>パスワードが一致していません</p>
          )}
        </div>
        <ButtonComponent
          label="ログイン"
          onClick={() => {
            handleSubmitNewPassword(resetPassword!, confirmPassword!);
          }}
          disabled={
            !passwordMatch ||
            !!passwordError ||
            !confirmPassword ||
            !resetPassword
          }
          loading={loading}
        />
      </div>
    </div>
  );
};

message.config({
  top: '80vh', // Removes the default top margin// Set the bottom margin (adjust as needed)
  duration: 3, // Duration for the message
  getContainer: () => document.body, // Ensure it renders on the body
});

export default ResetPassword;
