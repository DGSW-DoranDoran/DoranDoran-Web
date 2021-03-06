import testStore from "./test/testStore";
import loginStore from "./login/loginStore";
import groupStore from "./group/groupStore";
import makeTeamStore from "./makeTeam/makeTeamStore";
import groupListStore from "./groupList/groupListStore";

const stores = {
  testStore: new testStore(),
  loginStore: new loginStore(),
  groupStore: new groupStore(),
  makeTeamStore: new makeTeamStore(),
  groupListStore: new groupListStore()
};

export default stores;
