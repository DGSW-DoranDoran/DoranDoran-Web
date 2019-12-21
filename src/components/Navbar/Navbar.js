import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "style/Navbar.module.scss";
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

  return (
    <>
      <div className={styles.container}>
        <span className={styles.logo}>도란도란</span>
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
        <Link to="/">그룹 생성</Link>
        <Link to="/">마이페이지</Link>
        <Link to="/">로그인</Link>
        <Link to="/">회원가입</Link>
      </div>
    </>
  );
};

export default Navbar;
