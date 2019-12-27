import axios from "axios";
import { SERVER } from "../../config/config.json";

class loginRepository {
  login = async (username, password) => {
    let response = undefined;
    // let status = null;
    await axios
      .post(`${SERVER}/auth/login/`, {
        id: username,
        password
      })
      .then(({ data }) => {
        response = data;
        // status = data.status;
        console.log(response);
        // eslint-disable-next-line default-case
        // switch (status) {
        //   case 200:
        //     return 1;
        //   case 400:
        //     return 0;
        //   case 403:
        //     return 0;
        //   case 409:
        //     return 0;
        //   default:
        //     return 0;
        // }
      })
      .catch(err => {
        console.log(err);
      });
    return response;
  };
}

export default new loginRepository();
