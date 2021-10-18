import React from "react";
import styles from "./AlternativeButton.module.css";

type AlternativeButtonType = {
  className: string;
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

const AlternativeButton: React.FC<AlternativeButtonType> = (props) => {
  return <button
    className={props.className || styles.alternativeButton}
    type={props.type || 'button'}
    onClick={props.onClick}
  >{props.children}</button>
};

export default AlternativeButton;