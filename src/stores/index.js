import testStore from './test/testStore';
import loginStore from './login/loginStore';

const stores = {
  testStore: new testStore(),
  loginStore: new loginStore()
};

export default stores;
