import React from "react";
import { Link } from "react-router-dom";
import styles from "style/Navbar.module.scss";
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
        <Link to="/">팀 생성</Link>
        <Link to="/">마이페이지</Link>
        <Link to="/">로그인</Link>
        <Link to="/">회원가입</Link>
      </div>
    </>
  );
};

export default Navbar;
