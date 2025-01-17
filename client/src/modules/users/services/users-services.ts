import { FetchUsersResponse } from "@/interfaces/dashboard/users";
import axios from "axios"

export default function UseUsersServices(){
    
    const fetchUsers = async(searchQuery?:string):Promise<FetchUsersResponse> => {
        try{
            const response = await axios.post("/server/users",{searchQuery});
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
        fetchUsers
    }
}