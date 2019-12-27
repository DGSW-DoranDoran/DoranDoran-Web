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
  @observable name = "";
  @observable phone = "";
  @observable gender = "";
  @observable grade = "";
  @observable position = "";

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

  @action nameOnChange = value => {
    this.name = value;
  };
  @action phoneOnChange = value => {
    this.phone = value;
  };
  @action genderOnChange = value => {
    this.gender = value;
  };
  @action gradeOnChange = value => {
    this.grade = value;
  };
  @action positionOnChange = value => {
    this.position = value;
  };



  @action loginOnClick = async () => {
    const data = await loginRepository.login(this.username, this.password);
    console.log(data);
    if(data===undefined){
      alert("로그인에 실패하였습니다.");
      this.usernameOnChange("");
      this.passwordOnChange("");
    }
      else {
        this.token = data.data.token;
      localStorage.setItem(
        "userToken",
        JSON.stringify({
          token: this.token
          })
        );
        window.location.reload();
      };
    }

  @action joinOnClick = async () => {
    const response = await loginRepository.join(
      this.username, this.password, this.name, this.phone,
      this.gender, this.grade, this.position
    )
    if(response===0){
      alert("회원가입에 실패하였습니다.");
    }else{
      alert("회원가입 성공");
    }
  }

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
