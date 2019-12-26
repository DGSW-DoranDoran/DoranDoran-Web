import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import loginRepository from "./loginRepository";

@autobind
class loginStore {
  @observable username = "";
  @observable password = "";
  @observable member;
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
    const data = await loginRepository.login(this.username, this.password);
    this.token = data.data.token;
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
      this.member = data.data.member;
      // window.location.reload();
    }
  };
  // @action logOutOnClick = async () => {
  //   window.localStorage.removeItem();
  // };
}

export default loginStore;
