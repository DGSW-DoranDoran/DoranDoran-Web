import React from "react";

const ChoiceHeader = ({ onClick }) => {
  return (
    <div className="ChoiceHeader">
      <input type="button" onClick={() => onClick("MASTERTEAM")}>
        "팀 관리"
      </input>
      <input type="button" onClick={() => onClick("ASSISTANTTEAM")}>
        "부원인 팀"
      </input>
      <input type="button" onClick={() => onClick("WAITINGTEAM")}>
        "신청 대기중인 팀"
      </input>
    </div>
  );
};

export default ChoiceHeader;
