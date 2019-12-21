import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import TestPage from "pages/TestPage";
import LoginPage from "pages/LoginPage";
import MakeTeamPage from "pages/MakeTeam/MakeTeamPage";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={() => <TestPage />} />
      <Route exact path={"/login"} render={() => <LoginPage />} />
      <Route exact path={"/makeTeam"} render={() => <MakeTeamPage />} />
    </Switch>
  );
};

export default App;
