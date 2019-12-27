import React, { useRef, useEffect } from "react";
import styles from "./FailMakeTeam.module.scss";

const FailMakeTeam = () => {
  const contain_ref = useRef(null);

  //마운트 될 때 애니메이션
  useEffect(() => {
    console.log(document);
    document.body.classList.toggle(styles.focus_out);
  }, []);

  return (
    <div className={styles.contain} ref={contain_ref}>
      <button
        className={styles.btn}
        onClick={() => {
          contain_ref.current.classList.toggle(styles.hide);
        }}
      >
        x
      </button>
      <span className={styles.info}>그룹 생성에 실패하였습니다!</span>
    </div>
  );
};

export default FailMakeTeam;
