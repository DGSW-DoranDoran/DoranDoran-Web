import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.contain}>
      <span className={styles.loading_txt}>Loading...</span>
    </div>
  );
};

export default Loading;
