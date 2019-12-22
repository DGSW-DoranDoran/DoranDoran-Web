import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import groupRepository from './groupRepository';

@autobind
class groupStore {
  @observable comment=[];
  @observable group=
    {
        "group_id": 1,
        "category_id": 2,
        "name": "삭제할꼬야",
        "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "deadline_member": 5,
        "deadline_time": "2019-12-22T00:00:00.000Z",
        "status": 1,
        "create_time": "2019-12-22T00:00:00.000Z",
        "image": null,
        "founder": "진정호",
        "current_member_count": 3
    };
  @observable groupId=null;
  @observable flag=true;
  @observable count=true;

  @action handleButtonClick = (e) => {
    e.preventDefault();
    this.flag = !this.flag;
  }

  @action getId = (value) => {
    this.groupId = value;
  };

  @action getComment = async () => {
    this.comment = await groupRepository.getComment(this.groupId);
    console.log(this.comment);
  };

  @action getGroup = async () => {
    this.group = await groupRepository.getGroup(this.groupId);
  };

  @action postComment = async (memberId, comment) => {
    await groupRepository.postComment(this.groupId, memberId, comment);
  };

  @action applyJoin = async (memberId) => {
    await groupRepository.applyJoin(this.groupId, memberId)
  }

}

export default groupStore;