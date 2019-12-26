import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import loginRepository from "./loginRepository";

@autobind
class loginStore {
  @observable username = "";
  @observable password = "";
  @observable token = "";
  // @observable status = "";
  // @observable flag = 0;

  @action usernameOnChange = value => {
    this.username = value;
  };

  @action passwordOnChange = value => {
    this.password = value;
  };

  @action loginOnClick = async () => {
    this.token = await loginRepository.login(this.username, this.password);
    if (this.token === null) {
      alert("로그인에 실패하였습니다.");
      this.usernameOnChange("");
      this.passwordOnChange("");
    } else {
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: this.token
        })
      );
      // window.location.reload();
    }
  };
}

export default loginStore;
