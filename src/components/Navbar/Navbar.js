import React from "react";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.logo}>도란도란</span>
        <div className={styles.inputArea}>
          <FaSearch
            style={{ verticalAlign: "middle", color: "gray", marginRight: 10 }}
          />
          <input type="text" placeholder="검색" className={styles.input} />
        </div>
        <span>팀 생성</span>
        <span>마이페이지</span>
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </>
  );
};

export default Navbar;
