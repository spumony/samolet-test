import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout, Typography } from "antd";

import Libraries from "pages/libraries";
import { getLibrariesData } from "common/redux/actions/libraries";
import Library from "pages/library";
import "./app.css";

const { Header, Footer } = Layout;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLibrariesData());
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <Header>
        <Typography.Text mark>[Libraries of Russia]</Typography.Text>
      </Header>
      <Switch>
        <Route exact path="/" component={Libraries} />
        <Route path="/library/:id" component={Library} />
      </Switch>

      <Footer> Russian Federation Libraries</Footer>
    </Layout>
  );
};

export default App;
