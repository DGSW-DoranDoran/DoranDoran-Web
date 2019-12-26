import React from "react";
import styles from "./LoadingFail.module.scss";

const LoadingFail = () => {
  return (
    <div className={styles.contain}>
      <span className={styles.loading_txt}>Loading Failed</span>
    </div>
  );
};

export default LoadingFail;
