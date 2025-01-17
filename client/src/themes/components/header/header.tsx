import React from "react";
import styles from "./header.module.scss";
import Icons from "@/themes/icons/icons";
import { Dropdown, Menu } from "antd";

const Header = () => {
  // Define the menu items with icons
  const menuItems = [
    {
      key: "profile",
      label: "マイアカウント",
      icon: Icons.singleUser, // Add icon here
    },
    {
      key: "logout",
      label: "ログアウト",
      icon: Icons.logout, // Add icon here
    },
  ];

  // Generate the menu using Ant Design's Menu component
  const menu = (
    <Menu
      items={menuItems.map((item) => ({
        key: item.key,
        label: (
          <div className={styles.menuItem}>
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <p>{item.label}</p>
          </div>
        ),
      }))}
    />
  );

  return (
    <div className={styles.headerWrapper}>
      <Dropdown overlay={menu} className={styles.dropdown} trigger={["click"]}>
        <span className={styles.userAvatar}>{Icons.userAvatar}</span>
      </Dropdown>
    </div>
  );
};

export default Header;
