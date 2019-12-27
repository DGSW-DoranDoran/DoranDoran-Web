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
  // @observable authenticated = 0;

  // @action errormsg = () => {
  //   if (this.status === 0) {
  //     alert("로그인 에러");
  //   }
  // };

  @action usernameOnChange = value => {
    this.username = value;
  };

  @action passwordOnChange = value => {
    this.password = value;
  };

  @action loginOnClick = async () => {
    const data = await loginRepository.login(this.username, this.password);
    console.log(data);
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
      console.log(this.member);

      // this.checkToken(1);
      // window.location.reload();
    }
  };

  @action handleKeyPress = e => {
    if (e.key === "Enter") {
      this.loginOnClick();
    }
  };

  // @action checkToken = authenticated => {
  //   if (authenticated === 1) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };
  // @action logOutOnClick = async () => {
  //   window.localStorage.removeItem();
  // };
}

export default loginStore;
