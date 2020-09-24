import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./Button.css";

interface IProps {
  Label: string;
  isPrimary: boolean;
  Type: any;
  onClick: () => void;
}

const Button: React.FC<IProps> = (props) => (
  <button
    onClick={props.onClick}
    className={props.isPrimary ? "primary" : "nonPrimary"}
    type={props.Type}
  >
    {props.Label}
  </button>
);

export default Button;
