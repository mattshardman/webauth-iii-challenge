import React from "react";
import withLogin from "../withLogin";
import Login from "./Login";
import Users from "./Users";

import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import SignUp from "./SignUp";

function Container(props) {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Layout {...props} >
        <Route path="/users" component={Users} />
      </Layout>
    </Switch>
  );
}

export default withLogin(Container);
