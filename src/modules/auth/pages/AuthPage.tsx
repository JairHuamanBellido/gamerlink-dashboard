import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Spinner } from "../../shared/Spinner/Spinner";
import "./AuthPage.css";

export const AuthPage: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("authorization", "true");
    setTimeout(() => {
      setRedirect(true);
    }, 5000);
  }, []);
  if (!redirect) {
    return (
      <div className="auth-container">
        <h2>Permisos</h2>
        <p>Estamos generando sus permisos, por favor espere.</p>
        <Spinner />
      </div>
    );
  }
  return <Redirect to="/" />;
};
