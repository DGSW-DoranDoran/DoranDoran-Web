import React from 'react';
import ListCard from '../ListCard/ListCard';
import "./List.scss";

const List = (props) => {
  const { className, teams } = props;

  return (
    <div className={className !== undefined ? className : "listClass"}>
      <div className="list">
        <span style={{
          width: "550px",
        }}>
          팀 정보
        </span>
        <span style={{
          width: "80px"
        }}>
          인원
        </span>
        <span style={{
          width: "110px"
        }}>
          등록일
        </span>
        <span style={{
          width: "110px"
        }}>
          마감일
        </span>
      </div>
      {teams !== undefined ? teams.map(item => {
        return <ListCard team={item} />
      }) : 
        <div className="listCard err">
          <span style={{
            margin: "0 auto",
          }}>등록된 팀이 없습니다.</span>
        </div>
      }
    </div>
  )
}

export default List;