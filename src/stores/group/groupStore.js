import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import groupRepository from './groupRepository';

@autobind
class groupStore {
  @observable comment;
  @observable group;
  @observable groupId;
  @observable flag=true;

  @action handleButtonClick = (e) => {
    e.preventDefault();
    this.flag = !this.flag;
  }

  @action getId = (value) => {
    this.groupId = value;
  };

  @action getComment = async () => {
    this.comment = await groupRepository.getComment(this.groupId);
  };

  @action getGroup = async () => {
    this.group = await groupRepository.getGroup(this.groupId);
  };

  @action postComment = async (groupId, memberId, comment) => {
    await groupRepository.postComment(groupId, memberId, comment);
  };

}

export default groupStore;