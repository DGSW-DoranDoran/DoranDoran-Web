import React from 'react';
import "./ListCard.scss";

const ListCard = (props) => {
  var { className, category, name, type, status, member_count, deadline_member, create_time, deadline_time } = props;

  status = 1

  return (
    <div className={"listCard " + className} >
      <div>
        <div style={{
          margin: "15px 0 0",
          padding: "0 20px",
          width: "550px",
          boxSizing: "border-box",
          color: "#aaa",
          fontSize: "13px"
        }}>
          <span>{category}</span>
        </div>
        <div style={{
          padding: "10px 20px 5px",
          width: "485px",
          boxSizing: "border-box",
          color: "#666",
          fontSize: "18.5px",
          fontWeight: "bold",
        }}>
          <span>{name}</span>
        </div>
        <div style={{
          padding: "8px 20px",
          width: "485px",
          boxSizing: "border-box",
          color: "#aaa",
          fontSize: "15px"
        }}>
          <span>{type === 0 ? "선착순" : "일반 모집"}</span>
        </div>
        <div style={{
          margin: "0 0 15px",
          padding: "8px 20px 0",
          width: "485px",
          boxSizing: "border-box",
          color: status === 0 ? "#7ea9f7" : "#fe8e5d",
          fontSize: "15px"
        }}>
          <span>{status === 0 ? "모집중" : "모집완료"}</span>
        </div>
      </div>
      <div>
        <div style={{
          padding: "64px 0",
          width: "80px",
          fontSize: "16px",
          textAlign: "center",
        }}>
          <span>{member_count} / {deadline_member}</span>
        </div>
      </div>
      <div style={{
        padding: "57px 0",
        width: "110px",
        color: "#ccc",
        fontSize: "14px",
        textAlign: "center",
      }}>
        {create_time}
        <span>2019-12-20</span>
        <br/>
        <span>12:17:30</span>
      </div>
      <div style={{
        padding: "57px 0",
        width: "110px",
        color: "#ccc",
        fontSize: "14px",
        textAlign: "center",
      }}>
        {deadline_time}
        <span>2019-12-31</span>
        <br/>
        <span>23:59:59</span>
      </div>
    </div>
  )
}

export default ListCard;

/*

*/