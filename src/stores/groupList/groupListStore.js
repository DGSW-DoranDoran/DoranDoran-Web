import { autobind } from "core-decorators";
import { observable, action } from "mobx";
import groupListRepository from "./groupListRepository";

@autobind
class groupListStore {
  constructor() {
    this.LOADING_ENUM = {
      FAIL: -1,
      LOADING: 1,
      SUCCESS: 2
    };
  }

  @observable groups = [];
  @observable curCategory = "대회";
  @observable loadingState = 1;

  @action getGroupAll = async () => {
    this.loadingState = this.LOADING_ENUM.LOADING;

    await groupListRepository
      .getGroupAll()
      .then(res => {
        this.loadingState = this.LOADING_ENUM.SUCCESS;
        console.log(res.data.data.groups);
        this.groups = res.data.data.groups;
      })
      .catch(err => {
        console.error(err);
        this.loadingState = this.LOADING_ENUM.FAIL;
      });
  };

  @action getGroupByCategory = async category_id => {
    this.loadingState = this.LOADING_ENUM.LOADING;

    await groupListRepository
      .getGroupByCategory(category_id)
      .then(res => {
        this.loadingState = this.LOADING_ENUM.SUCCESS;
        console.log(res.data.data.groups);
        this.groups = res.data.data.groups;
      })
      .catch(err => {
        console.error(err);
        this.loadingState = this.LOADING_ENUM.FAIL;
      });
  };

  @action setCurCategory = category => {
    console.log(`${this.curCategory} -> ${category}`);
    this.curCategory = category;
  };
}

export default groupListStore;
