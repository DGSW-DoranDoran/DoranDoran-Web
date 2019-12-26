import axios from "axios";
import { SERVER } from "../../config/config.json";

class loginRepository {
  login = async (username, password) => {
    let response = null;
    let status = null;
    await axios
      .post(`http://10.80.161.54:3001/auth/login/`, {
        id: username,
        password
      })
      .then(({ data }) => {
        response = data;
        status = data.status;
        console.log(status);

        // eslint-disable-next-line default-case
        switch (status) {
          case 400:
            return 0;
          case 403:
            return 0;
          case 409:
            return 0;
        }
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        return 0;
      });
    return response;
  };
}

export default new loginRepository();
