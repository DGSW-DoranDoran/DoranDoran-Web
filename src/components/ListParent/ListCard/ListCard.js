import React from 'react';
import "./ListCard.scss";

const ListCard = (props) => {
  const { team } = props;

  return (
    <div className="listCard" >
      <div>
        <div style={{
          margin: "15px 0 0",
          padding: "0 20px",
          width: "550px",
          color: "#aaa",
          fontSize: "13px"
        }}>
          <span>{team.category}</span>
        </div>
        <div style={{
          padding: "10px 20px 5px",
          width: "485px",
          color: "#666",
          fontSize: "18.5px",
          fontWeight: "bold",
        }}>
          <span>{team.name}</span>
        </div>
        <div style={{
          padding: "8px 20px",
          width: "485px",
          color: "#aaa",
          fontSize: "15px"
        }}>
          <span>{team.type === 0 ? "선착순" : "일반 모집"}</span>
        </div>
        <div style={{
          margin: "0 0 15px",
          padding: "8px 20px 0",
          width: "485px",
          color: team.status === 0 ? "#7ea9f7" : "#fe8e5d",
          fontSize: "15px"
        }}>
          <span>{team.status === 0 ? "모집중" : "모집완료"}</span>
        </div>
      </div>
      <div>
        <div style={{
          padding: "64px 0",
          width: "80px",
          fontSize: "16px",
          textAlign: "center",
        }}>
          <span>{team.member_count} / {team.deadline_member}</span>
        </div>
      </div>
      <div style={{
        padding: "57px 0",
        width: "110px",
        color: "#ccc",
        fontSize: "14px",
        textAlign: "center",
      }}>
        {team.create_time}
      </div>
      <div style={{
        padding: "57px 0",
        width: "110px",
        color: "#ccc",
        fontSize: "14px",
        textAlign: "center",
      }}>
        {team.deadline_time}
      </div>
    </div>
  )
}

export default ListCard;

/*

*/