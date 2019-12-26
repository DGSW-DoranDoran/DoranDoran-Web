import React, { useState, useEffect} from "react";
import { observer, inject } from 'mobx-react';
import "style/Group.scss";
import Navbar from '../../components/Navbar';
import TitleContent from '../../components/Group/TitleContent';
import GroupContent from '../../components/Group/GroupContent';
import CommentContent from '../../components/Group/CommentContent';

const GroupContainer =  ({store, groupId}) => {
  const { groupStore } = store;
  const [flag, SetFlag] = useState(0);

  const fetchData = async() => {
    groupStore.setId(groupId)
    groupStore.getGroup();
    groupStore.getComment();
    SetFlag(1);
  }

  useEffect(() => {
    if(flag===0) fetchData();
  })

  return(
    <div className="group-wrap">
      <header className="group-header"><Navbar /></header>
      <div className="group-container">
        <form className="group-form">
          <TitleContent 
            title={groupStore.group.name}
            curMember={groupStore.group.member_count} 
            maxMember={groupStore.group.deadline_member_count} 
            expireDay={groupStore.group.deadline_time} 
            category={groupStore.group.CategoryId} 
            member={groupStore.group.groupMember}
            onClick={groupStore.applyJoin}  
          />
        </form>
        <form className="group-info-form">
          <div className="group-info-div">
            <button className={"group-info-btn-" +groupStore.flag} disabled={groupStore.flag} onClick={groupStore.handleButtonClick}>그룹 상세 정보</button>
            <button className={"group-info-btn-" +!groupStore.flag} disabled={!groupStore.flag} onClick={groupStore.handleButtonClick}>유저 댓글</button>
          </div>
          {
            groupStore.flag === true
              ? <GroupContent content={groupStore.group.content}/>
              : <CommentContent content={groupStore.comment}/>
          }
        </form>
      </div>
    </div>
  )
}

export default inject("store")(observer(GroupContainer));

