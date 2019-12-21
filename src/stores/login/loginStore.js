import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import loginRepository from "./loginRepository";

@autobind
class loginStore {
  @observable username = "";
  @observable password = "";
  @observable token = "";

  @action usernameOnChange = value => {
    this.username = value;
  };

  @action passwordOnChange = value => {
    this.password = value;
  };

  @action loginOnClick = async () => {
    this.token = await loginRepository.login();
    if (this.token) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: this.token
        })
      );
    }
  };
}

export default loginStore;
