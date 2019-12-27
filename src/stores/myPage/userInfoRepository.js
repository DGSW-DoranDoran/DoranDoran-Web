import axios from "axios";
import { KIM_SERVER } from "../../config/config.json";

class userInfoRepository {
  getUserInfo = async member_id => {
    let data;
    await axios
      .get(`${KIM_SERVER}/auth/info`, { params: { member_id } })
      .then(
        ({
          data: {
            data: { memberInfo }
          }
        }) => {
          data = memberInfo;
        }
      )
      .catch(error => {
        console.log(error);
      });
    return data;
  };
}

export default new userInfoRepository();
