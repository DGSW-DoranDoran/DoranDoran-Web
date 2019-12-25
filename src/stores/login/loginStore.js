import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import loginRepository from "./loginRepository";

@autobind
class loginStore {
  @observable username = "";
  @observable password = "";
  @observable token = "";
  @observable userState = "";
  @observable status = "";
  // @observable flag = 0;

  @action usernameOnChange = value => {
    this.username = value;
  };

  @action passwordOnChange = value => {
    this.password = value;
  };

  @action loginOnClick = async () => {
    this.token = await loginRepository.login();
    if (this.token === null) {
      alert("로그인에 실패하였습니다.");
      this.usernameOnChange("");
      this.passwordOnChange("");
    } else if (this.token) {
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: this.token
        })
      );
      window.location.reload();
    }
    console.log(
      "id: " +
        this.username +
        "\t" +
        "pw: " +
        this.password +
        "\t" +
        "token: " +
        this.token
    );
  };

  @action checkToken = async (token, status) => {
    if (token === null) {
      return 0;
    }
    // eslint-disable-next-line default-case
    switch (status) {
      case 200:
        return 1;
      case 400:
        return 0;
      case 404:
        return 0;
      case 409:
        return 0;
    }
  };
}

export default loginStore;
