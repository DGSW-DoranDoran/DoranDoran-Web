import axios from "axios";
import { SERVER } from "../../config/config.json";

class makeTeamRepository {
  postGroup = input => {
    const loginRes = JSON.parse(localStorage.getItem("userToken"));
    const token = loginRes.token.data.token;
    const config = {
      headers: { token }
    };

    console.log(input);
    return axios.post(`${SERVER}/group/create`, input, config);
  };
}

export default new makeTeamRepository();
