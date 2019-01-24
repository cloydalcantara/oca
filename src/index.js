import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";
import Login from 'views/Login/Login'
import indexRoutes from "routes/index";

const hist = createBrowserHistory();
const ProtectedRoute 
  = ({ isAllowed, ...props }) => 
     isAllowed 
     ? <Route {...props} /> 
     : <Redirect to="/" />;

ReactDOM.render(
  <Router history={hist}>
      <Switch>
        <Route exact path="/" component={Login}/>
        {indexRoutes.map((prop, key) => {
          return <ProtectedRoute isAllowed={true} path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
  </Router>,
  document.getElementById("root")
);
