import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./app.css";
import Libraries from "container/libraries";
import { Switch, Route } from "react-router-dom";
import LibraryDetailed from "components/library-detailed";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Libraries} />
        <Route path="/library/:id">
          <LibraryDetailed />
        </Route>
        <Route path="/library/:id" component={LibraryDetailed} />
      </Switch>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  );
};

export default App;
