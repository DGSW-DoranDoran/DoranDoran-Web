import axios from "axios";
import { KIM_SERVER } from "../../config/config.json";

class groupListRepository {
  getGroupAll = () => {
    return axios.get(`${KIM_SERVER}/group/groups`);
  };

  getGroupByCategory = category_id => {
    return axios.get(`${KIM_SERVER}/group/groups?category_id=${category_id}`);
  };
}

export default new groupListRepository(); //싱글톤 패턴
