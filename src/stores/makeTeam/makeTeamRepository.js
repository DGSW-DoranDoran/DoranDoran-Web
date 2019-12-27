import axios from "axios";
import { KIM_SERVER } from "../../config/config.json";

class makeTeamRepository {
  postGroup = req => {
    console.log("요청: ", req);

    const loginRes = JSON.parse(localStorage.getItem("userToken"));
    const token = loginRes.token;
    const config = {
      headers: { token }
    };

    return axios.post(`${KIM_SERVER}/group/create`, req, config);
  };
}

export default new makeTeamRepository();
