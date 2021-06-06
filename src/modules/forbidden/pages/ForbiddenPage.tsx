import React from "react";
import "./ForbiddenPage.css"
export const ForbiddenPage: React.FC = () => {
  return (
    <div className="forbidden-container">
      <h1>ACCESO DENEGADO</h1>
      <p>No tiene permisos para acceder a esta página</p>
    </div>
  );
};
