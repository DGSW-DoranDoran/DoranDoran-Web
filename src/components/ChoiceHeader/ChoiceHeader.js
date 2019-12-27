import React from "react";
import "./ChoiceHeader.scss";

const ChoiceHeader = ({ onClick }) => {
  return (
    <div className="ChoiceHeader">
      <button onClick={() => onClick("MASTER")} className="c-item">
        팀 관리
      </button>
      <button
        type="button"
        onClick={() => onClick("ASSISTANT")}
        className="c-item"
      >
        부원인 팀
      </button>
      <button
        type="button"
        onClick={() => onClick("WAITING")}
        className="c-item"
      >
        신청 대기 중인 팀
      </button>
    </div>
  );
};

export default ChoiceHeader;
