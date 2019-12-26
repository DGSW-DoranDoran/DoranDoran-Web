import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import groupRepository from './groupRepository';

@autobind
class groupStore {
  @observable comment=[
    {
      "member_id":"",
      "comment":""
    },
  ];
  @observable group={
    name:"",
    member_count:"",
    deadline_member_count:"",
    deadline_time:"",
    CategoryId:"",
    groupMember:"",
    applyJoin:"",
    content:"",
  };
  @observable groupId=null;
  @observable flag=true;
  @observable count=true;

  @action handleButtonClick = (e) => {
    e.preventDefault();
    this.flag = !this.flag;
  }

  @action setId = (value) => {
    this.groupId = value;
  };

  @action getComment = async () => {
    this.comment = await groupRepository.getComment(this.groupId);
  };

  @action getGroup = async () => {
    this.group = await groupRepository.getGroup(this.groupId);
  };

  @action postComment = async (memberId, comment) => {
    console.log("post Comment");
    await groupRepository.postComment(this.groupId, memberId, comment);
  };

  @action applyJoin = async (memberId) => {
    console.log("enter Join");
    await groupRepository.applyJoin(this.groupId, memberId)
  }

}

export default groupStore;