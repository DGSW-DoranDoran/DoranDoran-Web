import React, { useRef } from "react";
import styles from "./SuccessMakeTeam.module.scss";

const SuccessMakeTeam = () => {
  const contain_ref = useRef(null);

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
      <span className={styles.info}>그룹을 생성하였습니다!</span>
    </div>
  );
};

export default SuccessMakeTeam;
