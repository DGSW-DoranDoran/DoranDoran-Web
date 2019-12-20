import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "35px",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        }}
      >
        <span
          style={{
            marginRight: 40,
            color: "blue"
          }}
        >
          도란도란
        </span>
        <span
          style={{
            marginRight: 20
          }}
        >
          팀 생성
        </span>
        <span
          style={{
            marginRight: 20
          }}
        >
          마이페이지
        </span>
        <span
          style={{
            marginRight: 20
          }}
        >
          로그인
        </span>
        <span
          style={{
            marginRight: 20
          }}
        >
          회원가입
        </span>
      </div>
    </>
  );
};

export default Navbar;
