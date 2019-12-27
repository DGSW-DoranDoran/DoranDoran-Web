import React, { useState } from "react";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleContent = ({
  title,
  curMember,
  maxMember,
  expireDay,
  category,
  member,
  onClick
}) => {
  const [flag, setFlag] = useState(0);
  let memberDiv;

  if (category === 1) category = "대회";
  if (category === 2) category = "식사";
  if (category === 3) category = "게임";
  if (category === 4) category = "프로젝트";
  if (category === 5) category = "기타";

  let founder = "";
  console.log(member);

  for (let i in member) {
    if (member[i].is_admin === 1) {
      founder = member[i];
    }
  }

  if (member) {
    memberDiv = member.map((item, index, array) => {
      return (
        <div className="group-comment">
          <h3 className="group-c3">{array[index].member_id}</h3>
        </div>
      );
    });
  }

  const tNum = expireDay.indexOf("T");
  const dotNum = expireDay.indexOf(".");

  const expireDate = expireDay.slice(0, tNum);
  const expireTime = expireDay.slice(tNum + 1, dotNum);

  return (
    <>
      <div className="group-form-top">
        <h1>{title}</h1>
      </div>
      <div className="group-form-bottom">
        <div className="group-form-div">
          <h3 className="group-form-bottom-txt" style={{ marginRight: "3%" }}>
            멤버수: {curMember}명/{maxMember}명{" "}
          </h3>
          <button
            type="button"
            className="group-btn"
            onClick={() => setFlag(1)}
          >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </button>
        </div>
        {flag === 1 && memberDiv}
        <h3 className="group-form-bottom-txt">
          마감일: {expireDate} {expireTime}
        </h3>
        <h3 className="group-form-bottom-txt">카테고리: {category}</h3>
        <h3 className="group-form-bottom-txt">개설자: {founder.member_id}</h3>
        <button className="group-form-btn" type="button" onClick={onClick}>
          <span className="group-form-btn-text">신청하기</span>
        </button>
      </div>
    </>
  );
};

export default TitleContent;
