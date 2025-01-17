import { LoginResponse, ResetPasswordResponse, SentResetUrlResponse } from "@/interfaces/authentication/login";
import axios from "axios"

export default function UseAuthenticationServices(){
    const handleLogin = async(email:string,password:string):Promise<LoginResponse> => {
        try {
            const response = await axios.post("/server/authentication/login",{ email, password });
            return{
                status:response.data.status,
                message:response.data.message
            }
        } catch (error) {
            throw error;
        }
    }


    const handleSendResetUrl = async(email:string):Promise<SentResetUrlResponse> => {
        try {
            const response = await axios.post("/server/authentication/get-reset-link",{ email });
            return{
                status:response.data.status,
                message:response.data.message
            }
        } catch (error) {
            throw error;
        }
    }

    const handleResetPassword = async(newPassword:string,confirmationPassword:string):Promise<ResetPasswordResponse> => {
        try {
            const response = await axios.post("/server/authentication/reset-password",{ newPassword,confirmationPassword  });
            return{
                status:response.data.status,
                message:response.data.message
            }
        } catch (error) {
            throw error;
        }
    }


    return {
        handleLogin,
        handleSendResetUrl,
        handleResetPassword
    }
}