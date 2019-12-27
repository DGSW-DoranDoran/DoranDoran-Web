import React, { useState, useEffect} from "react";
import { observer, inject } from 'mobx-react';
import "style/Group.scss";
import Navbar from '../../components/Navbar';
import TitleContent from '../../components/Group/TitleContent';
import GroupContent from '../../components/Group/GroupContent';
import CommentContent from '../../components/Group/CommentContent';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GroupContainer =  ({store, groupId}) => {
  const { groupStore } = store;
  const [flag, setFlag] = useState(0);

  const fetchData = async() => {
    groupStore.setGroupId(groupId);
    groupStore.setMemberId();
    groupStore.getMember(groupStore.memberId);
    groupStore.getGroup();
    groupStore.getComment();
    setFlag(1);
  }

  useEffect(() => {
    if(flag===0) fetchData();
  })

  return(
    <>
      {flag === 1 && (
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
                  ? <GroupContent content={groupStore.group.content} image={groupStore.group.image} />
                  : 
                    <div className="group-commentContent">
                      <div className="group-comment-submit">
                        <div className="group-comment-submit-name">
                          <h3>{groupStore.member.name}</h3>
                        </div>
                        <div className="group-comment-input">
                          <input onChange={({ target: { value } }) => groupStore.onChange(value)} value={groupStore.comment} placeholder="댓글을 입력하세요..." className="group-comment-submit-input"></input>
                        </div>
                        <button className="group-comment-submit-btn" type="submit" onClick={groupStore.postComment}><FontAwesomeIcon icon={faPaperPlane} size={"2x"} /></button>
                      </div>
                      <CommentContent content={groupStore.comments} onClick={groupStore.postComment}/>
                    </div>
                }
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default inject("store")(observer(GroupContainer));

