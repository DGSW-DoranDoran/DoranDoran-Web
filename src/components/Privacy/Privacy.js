import React from "react";
import "./Privacy.scss";

const Privacy = ({
  name,
  image,
  gender,
  phone_number,
  grade,
  position,
  member_id
}) => {
  return (
    <div className="Privacy">
      <div>
        <div>{image}</div>
        <div>{name}</div>
        <div>
          사용자 ID:
          <small>{member_id}</small>
        </div>
      </div>
      <div>
        <div>성별: ({gender})</div>
        <div>연락처: {phone_number}</div>
        <div>학년: {grade}</div>
        <div>기술: {position}</div>
      </div>
    </div>
  );
};

export default Privacy;
