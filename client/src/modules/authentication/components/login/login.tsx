"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import InputComponent from "@/themes/components/input-component/input-component";
import ButtonComponent from "@/themes/components/button-component/button-component";
import { validateEmail } from "@/utils/authentication-utils/validation";
import UseAuthenticationServices from "../../services/authentication-services";
import { message } from "antd";
import { delay } from "@/utils/common-utils/utils";
import { useRouter } from "next/navigation";

interface LoginProps {
  setShowLogin: (status: boolean) => void;
}
const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleShowLogin = () => setShowLogin(false);
  const [emailError, setEmailError] = useState<string>();
  const [loginError, setLoginError] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);

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


  const handleLogin = async (email:string,password:string) => {
    setLoading(true);
    try{
      await delay(1000);
      const response =await UseAuthenticationServices().handleLogin(email,password);
      if(response.status){
        message.success(response.message).then(()=>{
          router.push("/dashboard/home")
        });
      }else{
        message.error(response.message);
        setLoginError(true);
      }

      setLoading(false);
    }catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <h2>ログイン</h2>

      <div className={styles.loginForm}>
        <div className={styles.inputField}>
          <h3>メールアドレス</h3>
          <InputComponent
            value={email}
            onChange={setEmail}
            placeholder="Enter your E-mail"
            type="email"
            status={emailError || loginError ? "error" : undefined}
          />
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
        </div>
        <div className={styles.inputField}>
          <h3>パスワード</h3>
          <InputComponent
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="Enter your password"
            status={loginError ? "error" : undefined}

          />
        </div>
        <ButtonComponent
          label="ログイン"
          onClick={() => {handleLogin(email,password);}}
          disabled={
            !email ||
            password.length < 8 ||
            password.length > 20 ||
            !!emailError
          }
          loading={loading}
        />
        <span className={styles.forgotPassword} onClick={handleShowLogin}>
          パスワードをお忘れの場合
        </span>
      </div>
    </div>
  );
};


message.config({
  top: '80vh', // Removes the default top margin// Set the bottom margin (adjust as needed)
  duration: 3, // Duration for the message
  getContainer: () => document.body, // Ensure it renders on the body
});


export default Login;
