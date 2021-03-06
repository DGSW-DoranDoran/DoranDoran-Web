import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const inputArea = useRef(null);
  const input = useRef(null);

  const handleInputFocus = () => {
    inputArea.current.classList.toggle(styles.input_focus_on);

    for (let el of inputArea.current.children)
      el.classList.toggle(styles.input_focus_on);
  };

  const logout = () => {
    window.localStorage.removeItem("userToken");
  }

  return (
    <div className={styles.container}>
      <Link to="/group" className={styles.logo_contain}>
        <span className={`${styles.logo} ${styles.span}`}>도란도란</span>
      </Link>
      <div className={styles.input_area} ref={inputArea}>
        <IconContext.Provider value={{ className: styles.search_icon }}>
          <FaSearch />
        </IconContext.Provider>
        <input
          type="text"
          placeholder="검색"
          className={styles.input}
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          ref={input}
        />
      </div>
      <Link to="/makeTeam" className={styles.a}>
        그룹 생성
      </Link>
      <Link to="/MyPage" className={styles.a}>
        마이페이지
      </Link>
      <Link to="/login" className={styles.a} onClick={logout}>
        로그아웃
      </Link>
      <Link to="/join" className={styles.a}>
        회원가입
      </Link>
    </div>
  );
};

export default Navbar;
