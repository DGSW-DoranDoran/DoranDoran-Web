import axios from "axios";
import { SERVER,KIM_SERVER } from "../../config/config.json";

class loginRepository {
  login = async (username, password) => {
    let response = undefined;
    // let status = null;
    await axios
      .post(`${KIM_SERVER}/auth/login/`, {
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

  join = async (id, password, name, phone, gender, grade, position) =>{
    let form = new FormData()
    let response = 0;
    form.append('id',id);
    form.append('password',password);
    form.append('name',name);
    form.append('phone',phone);
    form.append('gender',gender);
    form.append('grade',grade);
    form.append('position',position);
    
    await axios
      .post(`${SERVER}/auth/register`, form)
      .then( ({data:{status}}) => {
        console.log(status);
        response = status;
      })
      .catch( error => {
        console.log(error);
      })
    return response
  }
}

export default new loginRepository();
