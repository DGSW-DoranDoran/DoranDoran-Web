import React from 'react';
import ListCard from '../ListCard/ListCard';
import "./List.scss";

const List = (props) => {
  return (
    <div>
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
      <ListCard/>
    </div>
  )
}

export default List;