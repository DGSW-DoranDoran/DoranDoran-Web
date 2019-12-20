import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import TestPage from "pages/TestPage";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={() => <TestPage />} />
      <Route exact path={"/navbar"} render={() => <Navbar />} />
    </Switch>
  );
};

export default App;
