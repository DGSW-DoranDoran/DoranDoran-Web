import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import TestPage from "pages/TestPage";
import Navbar from "./Navbar/Navbar";
import LoginPage from "../pages/LoginPage";
import TeamRegistraionPage from "../pages/TeamRegistraionPage";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={() => <TestPage />} />
      <Route exact path={"/login"} render={() => <LoginPage />} />
      <Route exact path={"/navbar"} render={() => <Navbar />} />
      <Route
        exact
        path={"/TeamRegistraionPage"}
        render={() => <TeamRegistraionPage />}
      />
    </Switch>
  );
};

export default App;
