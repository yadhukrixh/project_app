"use client";
import React from "react";
import { Spin, Table, Tooltip } from "antd";
import styles from "./user-table.module.scss";
import { UsersData } from "@/interfaces/dashboard/users";
import { LoadingOutlined } from "@ant-design/icons";

interface UserTableProps {
  loading?: boolean;
  data: UsersData[];
}

// Define table columns
const columns = [
  {
    title: "No.",
    key: "no",
    render: (_: any, __: any, index: number) => (
      <span>{(index + 1).toString().padStart(2, "0") + "."}</span> // Auto-generated and formatted as "01."
    ),
  },
  {
    title: "ニックネーム",
    dataIndex: "nickname",
    key: "nickname",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "メールアドレス",
    dataIndex: "email",
    key: "email",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text.length > 20 ? `${text.slice(0, 20)}...` : text}</span>
      </Tooltip>
    ),
  },
  {
    title: "生年月",
    dataIndex: "birthMonth",
    key: "birthMonth",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "性別",
    dataIndex: "gender",
    key: "gender",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "居住地",
    dataIndex: "location",
    key: "location",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
  {
    title: "登録日",
    dataIndex: "registrationDate",
    key: "registrationDate",
    render: (text: string) => (
      <Tooltip title={text}>
        <span>{text}</span>
      </Tooltip>
    ),
  },
];

const UserTable: React.FC<UserTableProps> = ({ data, loading = false }) => {
  return (
    <div className="p-6">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        bordered={false}
        rowKey="key"
        className={styles.customTable}
        locale={{
          emptyText: "表示するデータがありません", // Customize your empty message here
        }}
        loading={{
          spinning: loading, // Show loading spinner based on your state
          indicator: (
            <div className="custom-loading-indicator">
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{ fontSize: 48, color: "orange" }}
                    spin
                  />
                }
              />
            </div>
          ), // Optional custom loading indicator
          delay: 500, // Optional delay in ms before showing loading indicator
          // Use `style` to hide the spinner in the header if needed
          style: { padding: 20, display:loading? "block":"none" }, // Apply style to control visibility
        }}
      />
    </div>
  );
};

export default UserTable;
