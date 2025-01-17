"use client";
import React, { useEffect, useState } from "react";
import styles from "./users.module.scss";
import SearchBar from "../components/search-bar/search-bar";
import UserTable from "../components/user-table/user-table";
import { UsersData } from "@/interfaces/dashboard/users";
import UseUsersServices from "../services/users-services";

// Sample data for the table

const Users: React.FC = () => {
  const [loading,setLoading] = useState<boolean>(false);
  const [data,setData] = useState<UsersData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleFetchData = async(searchQuery?:string)=>{
    setLoading (true);
    try{
      const response = await UseUsersServices().fetchUsers(searchQuery);
      setData(response.data);
      setLoading(false);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    handleFetchData(searchQuery);
  },[])

  useEffect(()=>{
    handleFetchData(searchQuery)
  },[searchQuery]);


  return (
    <div className={styles.usersWrapper}>
      <div className={styles.header}>
        <h2>登録ユーザー一覧</h2>

        <SearchBar onChange={setSearchQuery} value={searchQuery!} />
      </div>
      <UserTable data={data} loading={loading}/>
    </div>
  );
};

export default Users;
