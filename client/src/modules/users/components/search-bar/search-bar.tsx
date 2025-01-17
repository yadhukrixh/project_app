"use client";
import React from "react";
import styles from "./search-bar.module.scss";
import Icons from "@/themes/icons/icons";
import { Input } from "antd";

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  /**
   * Handles changes in the input field and invokes the `onChange` callback.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event for the input field.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <span>{Icons.search}</span>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder="ニックネーム / メールアドレスで検索"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
