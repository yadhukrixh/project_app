import React from "react";
import styles from "./button-component.module.scss";
import { Button } from "antd";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
