import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import makeTeamRepository from "./makeTeamRepository";

@autobind
class makeTeamStore {
  constructor() {
    this.POST_STATE = {
      FAIL: -1,
      LOADING: 1,
      SUCCESS: 2
    };
  }

  @observable postState = 0;
  @observable curCategory = "대회";

  @action postGroup = async input => {
    this.postState = this.POST_STATE.LOADING;
    await makeTeamRepository
      .postGroup(input)
      .then(res => {
        console.log(res);
        this.postState = this.POST_STATE.SUCCESS;
      })
      .catch(err => {
        console.error(err);
        this.postState = this.POST_STATE.FAIL;
      });
  };

  @action setCurCategory = category => {
    console.log(`${this.curCategory} -> ${category}`);
    this.curCategory = category;
  };
}

export default makeTeamStore;
