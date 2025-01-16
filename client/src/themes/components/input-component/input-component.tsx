import React from "react";
import styles from "./input-component.module.scss";
import { Input } from "antd";

interface CustomInputProps {
  /**
   * The value of the input field.
   */
  value: string | undefined;

  /**
   * Callback function to handle changes in the input value.
   * @param value - The updated value of the input field.
   */
  onChange: (value: string) => void;

  /**
   * Placeholder text for the input field. Default is "Enter text".
   */
  placeholder?: string;

  /**
   * The type of the input field (e.g., text, password, email). Default is "text".
   */
  type?: string;
  /**
   * The visibility of toggle button.
   */
  showEyeToggle?: boolean;
  /**
   * The Error status.
   */
  status?:"error" |undefined;
}

/**
 * Custom Input Component
 *
 * A reusable input component that wraps the Ant Design Input component, allowing for custom styling
 * and functionality.
 *
 * @param {CustomInputProps} props - The props for the InputComponent.
 * @returns {JSX.Element} The rendered Input component.
 */
const InputComponent: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "Enter text",
  type = "text",
  showEyeToggle,
  status=undefined

}) => {
  /**
   * Handles changes in the input field and invokes the `onChange` callback.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event for the input field.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      {showEyeToggle ? (
        <Input.Password
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.customInput} // Apply custom styling
          type={type}
          status={status}
          iconRender={(showPassword) =>
            showPassword ? "非表示" : "表示"
          }
        />
      ) : (
        <Input
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.customInput} // Apply custom styling
          type={type}
          status={status}
        />
      )}
    </>
  );
};

export default InputComponent;
