import React, {useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import "style/Group.scss";
import Navbar from '../../components/Navbar';


const GroupContainer = ({store, groupId}) => {
  const { groupStore } = store;

  const groupContent ={

  }

  const commentContent ={

  }

  useEffect(() => {
    groupStore.getId(groupId);
    groupStore.getGroup();
    groupStore.getComment();
    console.log(groupStore.comment);
    console.log(groupStore.group);
    console.log(groupStore.group_id);
  })

  return(
    <div className="group-wrap">
      <header className="group-header"><Navbar /></header>
      <div className="group-container">
        <form className="group-form">

        </form>
        <form className="group-info-form">
          <button className={"group-info-btn-" +groupStore.flag} disabled={groupStore.flag} onClick={groupStore.handleButtonClick}>그룹 상세 정보</button>
          <button className={"group-info-btn-" +!groupStore.flag} disabled={!groupStore.flag} onClick={groupStore.handleButtonClick}>유저 댓글</button>
          {/* {
            groupStore.
          } */}
        </form>
      </div>
    </div>
  )
}

export default inject("store")(observer(GroupContainer));