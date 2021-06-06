import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthPage } from "./modules/auth/pages/AuthPage";
import { AdminPage } from "./modules/admin/pages/AdminPage";
import RouterGuard from "./core/guard/RouterGuard";
import { ForbiddenPage } from "./modules/forbidden/pages/ForbiddenPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/authentication">
            <AuthPage />
          </Route>
          <Route exact={true} path="/">
            <RouterGuard  redirect={"/acceso-denegado"} component={<AdminPage />} />
          </Route>
          <Route exact={true} path="/acceso-denegado">
            <ForbiddenPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
