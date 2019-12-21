import testStore from './test/testStore';
import loginStore from './login/loginStore';
import groupStore from './group/groupStore';

const stores = {
  testStore: new testStore(),
  loginStore: new loginStore(),
  groupStore: new groupStore()
};

export default stores;
