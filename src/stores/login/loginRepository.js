import axios from "axios";
import { SERVER } from "../../config/config.json";

class loginRepository {
  login = async (username, password) => {
    let token = null;
    let status = null;

    await axios
      .post(`${SERVER}/auth/login`, {
        id: username,
        password
      })
      .then(({ data }) => {
        token = data.data;
        status = data.status;
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    return token, status;
  };
}

export default new loginRepository();
