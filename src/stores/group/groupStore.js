import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import groupRepository from './groupRepository';

@autobind
class groupStore {
  @observable comments=[
    {
      "member_id":"",
      "comment":""
    },
  ];
  @observable comment="";
  @observable.ref group={
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
  @observable memberId="";
  @observable image="";

  @action handleButtonClick = (e) => {
    e.preventDefault();
    this.flag = !this.flag;
  }

  @action setGroupId = (value) => {
    this.groupId = value;
  };

  @action setMemberId = () => {
    const jwtDecode = require('jwt-decode');
    const token = JSON.parse(localStorage.getItem('userToken')).token; 
    this.memberId = jwtDecode(token).id;
  }

  @action getComment = async () => {
    this.comments = await groupRepository.getComment(this.groupId);
  };

  @action getGroup = async () => {
    this.group = await groupRepository.getGroup(this.groupId);
  };

  @action postComment = async (e) => {
    e.preventDefault();
    await groupRepository.postComment(this.groupId, this.memberId, this.comment);
  };

  @action applyJoin = async () => {
    await groupRepository.applyJoin(this.groupId, JSON.parse(localStorage.getItem('userToken')).token);
  }

  @action onChange = value => {
    this.comment = value;
  }

  @action getMember = async () => {
    let member = await groupRepository.getMember(this.memberId);
    this.image = member.image;
  }
}

export default groupStore;