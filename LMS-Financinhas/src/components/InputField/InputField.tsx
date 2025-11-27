import React from "react";
import "./InputField.style.css";

interface InputFieldProps {
  label?: string;
  type: string;
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  className,
  placeholder,
  label,
  type,
  id,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="inputField">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        required={required}
      />
    </div>
  );
};

export default InputField;
