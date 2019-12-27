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
    console.log("store: ", input);

    const keys = Object.keys(input);
    const frm = new FormData();

    const makeFrm = () => {
      for (let i = 0; i < keys.length; i++) {
        frm.append(keys[i], input[keys[i]]);

        //for문을 다 순회했다면
        if (i === keys.length - 1) {
          return new Promise((resolve, reject) => {
            resolve(frm);
          });
        }
      }
    };

    this.postState = this.POST_STATE.LOADING;

    await makeFrm().then(frm => {
      console.log("frm: ", frm.has("image"));
    });

    await makeTeamRepository
      .postGroup(frm)
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
