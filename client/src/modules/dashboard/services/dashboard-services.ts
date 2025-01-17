import { FetchDashboardResponses } from "@/interfaces/dashboard/dashboard";
import axios from "axios"

export default function UseDashboardServices(){
    
    const fetchDashboardData = async():Promise<FetchDashboardResponses> => {
        try{
            const response = await axios.post("/server/dashboard");
            return {
                status:response.data.status,
                data:response.data.data,
                message:response.data.message
            }
        }catch(error){
            throw error;
        }
    }

    return {
        fetchDashboardData
    }
}