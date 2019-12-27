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
      <div className="P-profileWrap">
        <div className="P-profile">
          <img src="../../assets/LoginBackground.jpeg" className="P-Img">
            {image}
          </img>
          <div className="P-font">{name}</div>
          <div>
            사용자 ID:
            <small>{member_id}</small>
          </div>
        </div>
      </div>
      <div className="P-SubProfile">
        <div>성별: ({gender})</div>
        <div>연락처: {phone_number}</div>
        <div>학년: {grade}</div>
        <div>기술: {position}</div>
      </div>
    </div>
  );
};

export default Privacy;
