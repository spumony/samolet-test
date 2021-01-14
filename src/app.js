import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout } from "antd";

import Libraries from "common/container/libraries";
import { getLibrariesData } from "common/redux/actions/libraries";
import Library from "pages/library";
import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLibrariesData());
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Libraries} />
        <Route path="/library/:id" component={Library} />
      </Switch>
    </Layout>
  );
};

export default App;
