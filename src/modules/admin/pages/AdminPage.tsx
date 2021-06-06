import React from "react";
import { Spinner } from "../../shared/Spinner/Spinner";
import { useFetchSuscriptions } from "../hooks/useFetchSuscriptions";
import "./AdminPage.css";

export const AdminPage: React.FC = () => {
  const {  loading, success, suscriptions } = useFetchSuscriptions();
  return (
    <div className="admin-container">
      <h1>GAMERLINK</h1>

      {loading && (
        <div className="loading-container">
          <Spinner />
          <p>Cargando suscripciones...</p>
        </div>
      )}
      {!loading && success && (
        <>
          <div className="description">
            <p className="title">Suscripciones</p>
            <p className="total">{suscriptions.length} total</p>
          </div>
          <div>
            <table>
              <thead>
                <th>Nombre</th>
                <th>Correo</th>
              </thead>
              <tbody>
                {suscriptions.map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
