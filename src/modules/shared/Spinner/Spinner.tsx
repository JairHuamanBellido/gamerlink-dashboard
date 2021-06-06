import React from "react";
import "./Spinner.css";

export const Spinner: React.FC = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};
