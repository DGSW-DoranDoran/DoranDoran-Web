import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import TestPage from "pages/TestPage";
import LoginPage from "pages/LoginPage";
import MakeTeamPage from "pages/MakeTeam/MakeTeamPage";
import GroupPage from "pages/GroupPage";

const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} render={() => <TestPage />} />
      <Route exact path={"/login"} render={() => <LoginPage />} />
      <Route exact path={"/makeTeam"} render={() => <MakeTeamPage />} />
      <Route exact path="/group/:groupid" component={GroupPage} />
    </Switch>
  );
};

export default App;
