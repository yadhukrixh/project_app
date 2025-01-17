import React, { useEffect, useState } from "react";
import styles from "./forgot-password.module.scss";
import InputComponent from "@/themes/components/input-component/input-component";
import ButtonComponent from "@/themes/components/button-component/button-component";
import { validateEmail } from "@/utils/authentication-utils/validation";
import { delay } from "@/utils/common-utils/utils";
import UseAuthenticationServices from "../../services/authentication-services";
import { message } from "antd";

interface ForgotPasswordProps {
  setShow: (status: boolean) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setShow }) => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [loading,setLoading] = useState<boolean>(false);

  const handleShowLogin = () => setShow(true);

  const handleValidateEmail = (email: string) => {
    if (validateEmail(email)) {
      setEmailError(undefined);
    } else {
      setEmailError("有効なメールアドレスを入力してください");
    }
  };

  useEffect(() => {
    handleValidateEmail(email);
  }, [email]);

  const handleSentResetUrl = async (email:string) => {
    setLoading(true);
    try{
      await delay(1000);
      const response =await UseAuthenticationServices().handleSendResetUrl(email);
      if(response.status){
        message.success(response.message);
      }else{
        message.error(response.message);
      }
      setLoading(false);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className={styles.forgotPasswordWrapper}>
      <div className={styles.heading}>
        <h2>パスワード再設定</h2>
        <p>
          現在使っているメールアドレスを入力してください。パスワード再設定用のURLをメールで送信いたします。
        </p>
      </div>
      <div className={styles.forgotPasswordForm}>
        <div className={styles.inputField}>
          <h3>メールアドレス</h3>
          <InputComponent
            value={email}
            onChange={(value: string) => setEmail(value)} // Ensures value is passed correctly
            placeholder="Enter your E-mail"
            type="email"
            status={emailError ? "error" : undefined}
          />
        </div>

        <ButtonComponent
          label="パスワード再設定用URLを送信する"
          onClick={() => {handleSentResetUrl(email)}}
          disabled={!email || !!emailError} // Button disables if email is invalid or empty
          loading={loading}
        />
        <span className={styles.returnToLogin} onClick={handleShowLogin}>
          パスワードをお忘れの場合
        </span>
      </div>
    </div>
  );
};
export default ForgotPassword;