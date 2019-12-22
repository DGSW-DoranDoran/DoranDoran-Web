import React, {useEffect} from 'react';
import { observer, inject } from 'mobx-react';
import "style/Group.scss";
import Navbar from '../../components/Navbar';
import TitleContent from '../../components/Group/TitleContent';
import GroupContent from '../../components/Group/GroupContent';
import CommentContent from '../../components/Group/CommentContent';

const GroupContainer = ({store, groupId}) => {
  const { groupStore } = store;

  useEffect(() => {
    async function fecthData() {
      await groupStore.getId(groupId);
      // await groupStore.getGroup();
      // await groupStore.getComment();  
      // console.log("comment "+groupStore.comment);
      // console.log("group "+groupStore.group);
    };
    fecthData();
  },[groupId, groupStore]);
  
  return(
    <div className="group-wrap">
      <header className="group-header"><Navbar /></header>
      <div className="group-container">
        <TitleContent 
          title={groupStore.group.name}
          curMember={groupStore.group.current_member_count} 
          maxMember={groupStore.group.deadline_member} 
          expireDay={groupStore.group.deadline_time} 
          category={groupStore.group.category_id} 
          founder={groupStore.group.founder} />
        <form className="group-info-form">
          <div className="group-info-div">
            <button className={"group-info-btn-" +groupStore.flag} disabled={groupStore.flag} onClick={groupStore.handleButtonClick}>그룹 상세 정보</button>
            <button className={"group-info-btn-" +!groupStore.flag} disabled={!groupStore.flag} onClick={groupStore.handleButtonClick}>유저 댓글</button>
          </div>
          {
            groupStore.flag === true
              ? <GroupContent content={groupStore.group.content}/>
              : <CommentContent />
          }
        </form>
      </div>
    </div>
  )
}

export default inject("store")(observer(GroupContainer));