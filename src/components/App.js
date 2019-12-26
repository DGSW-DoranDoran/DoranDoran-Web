import React from "react";
import { Switch, Route /* Redirect */ } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import MakeTeamPage from "pages/MakeTeam/MakeTeamPage";
import GroupPage from "pages/GroupPage";
import MyPage from "pages/MyPage/MyPage";
import NotFountPage from "pages/NotFoundPage/NotFoundPage";

const App = () => {
  // const authenticated = window.localStorage.getItem("userToken");
  return (
    <Switch>
      <Route exact path={"/"} render={() => <LoginPage />} />
      <Route exact path={"/login"} render={() => <LoginPage />} />
      <Route exact path={"/makeTeam"} render={() => <MakeTeamPage />} />
      <Route exact path={"/myPage"} render={() => <MyPage />} />
      <Route exact path="/group/:groupid" component={GroupPage} />
      <Route component={NotFountPage} />
    </Switch>
  );
};

export default App;
