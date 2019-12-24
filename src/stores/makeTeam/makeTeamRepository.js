import axios from "axios";
import { SERVER2 } from "../../config/config.json";

class makeTeamRepository {
  postGroup = async input => {
    await axios.post(`${SERVER2}/group/create`, input).then(res => {
      console.log("그룹 생성 성공", res);
    });
  };
}

export default new makeTeamRepository();
