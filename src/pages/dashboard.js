import React, { useEffect, useState } from "react";
// noinspection NpmUsedModulesInstalled
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";
import Layout from "../components/layout";
import PrivateRoute from '../components/private-route'
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteLogin from "../components/route-login";
import RouteSecret from "../components/route-secret";
import 'react-netlify-identity-widget/styles.css'

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, [location]);

  const showModal = () => setVisibility(!isVisible)

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={showModal} />
    </Layout>
  );
};

export default Dashboard;
