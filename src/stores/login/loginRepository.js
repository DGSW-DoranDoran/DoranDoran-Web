import axios from 'axios';
import { SERVER } from '../../config/config.json';

class loginRepository {
  login = async (username, password) => {
    let token = null;

    await axios
      .post(`${SERVER}/auth/login`, {
        id: username,
        password,
      })
      .then(({ data }) => {
        token = data.data;
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    return token;
  }
}

export default new loginRepository();