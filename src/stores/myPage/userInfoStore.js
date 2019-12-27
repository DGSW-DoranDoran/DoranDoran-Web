import userInfoRepository from "./userInfoRepository";
import { observer, observable, action } from "mobx";
import { autobind } from "core-decorators";

@autobind
class userInfoStore {
  @observer memberId = "";
  @observable member = {
    gender: "",
    grade: "",
    image: "",
    name: "",
    phone: "",
    position: ""
  };

  @action setMemberId = () => {
    const jwtDecode = require("jwt-decode");
    if (localStorage.getItem("userToken") !== null) {
      const token = JSON.parse(localStorage.getItem("userToken")).token;
      this.memberId = jwtDecode(token).id;
    }
  };

  @action getMember = async () => {
    this.member = await userInfoRepository.getMember(this.memberId);
  };
}

export default userInfoStore;
