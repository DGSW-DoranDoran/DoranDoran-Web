import React from "react";
import "../../style/ColorScheme.scss";

const NotFoundPage = ({ history, location }) => {
  const posStyle = {
    top: "40%",
    left: "40%",
    position: "absolute",
    justifyContent: "center",
    alignItem: "center",
    textAlign: "center"
  };
  const NBtnStyle = {
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#a29bfe"
  };

  return (
    <div style={posStyle}>
      <h2>
        페이지를 찾을 수 없어요!! <br></br>현재 페이지:{" "}
        <code>{location.pathname}</code>
      </h2>
      <button
        style={NBtnStyle}
        onClick={() => {
          history.push("/login");
        }}
      >
        메인으로 가기
      </button>
    </div>
  );
};

export default NotFoundPage;
