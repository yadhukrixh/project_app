export interface UsersData{
    key:string;
    nickname:string;
    email:string;
    birthMonth:string;
    gender:string;
    location:string;
    registrationDate:string;
}


export interface FetchUsersResponse{
    status:boolean;
    data:UsersData[];
    message:string;
}