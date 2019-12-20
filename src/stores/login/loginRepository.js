import axios from 'axios';
import { SERVER } from '../../config/config.json';

class loginRepository {
  login = async (username, password) => {
    let token = null;

    await axios
      .post(`${SERVER}/api/login/`, {
        username,
        password,
      })
      .then(({ data }) => {
        token = data.data;
        console.log(data);
      })
      .catch(response => {
        console.log(response);
      });
    return token;
  }
}

export default new loginRepository();