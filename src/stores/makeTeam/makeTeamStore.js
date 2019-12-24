import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import makeTeamRepository from "./makeTeamRepository";

@autobind
class makeTeamStore {
  @observable postState = 0;

  @action postGroup = async input => {
    const POST_STATE = {
      fail: -1,
      loading: 1,
      success: 2
    };

    this.postState = POST_STATE.loading;
    await makeTeamRepository
      .postGroup(input)
      .then(res => {
        this.postState = POST_STATE.success;
      })
      .catch(err => {
        console.log(err);
        this.postState = POST_STATE.fail;
      });
  };
}

export default makeTeamStore;
