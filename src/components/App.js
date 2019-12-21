import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import TestPage from "pages/TestPage";
import LoginPage from "../pages/LoginPage";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={() => <TestPage />} />
      <Route exact path={"/login"} render={() => <LoginPage />} />
    </Switch>
  );
};

export default App;
