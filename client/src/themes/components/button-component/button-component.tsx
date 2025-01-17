import React from "react";
import styles from "./button-component.module.scss";
import { Button } from "antd";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading
}) => {
  return (
    <Button className={styles.button} onClick={onClick} disabled={disabled} loading={loading}>
      {!loading && label}
    </Button>
  );
};

export default ButtonComponent;
