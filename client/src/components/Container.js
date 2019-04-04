import React from "react";
import withLogin from "../withLogin";
import Login from "./Login";
import Users from "./Users";

import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";

function Container(props) {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      
      <Layout {...props} >
        <Route path="/users" component={Users} />
      </Layout>
    </Switch>
  );
}

export default withLogin(Container);
