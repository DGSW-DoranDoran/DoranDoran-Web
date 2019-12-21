import React from "react";
import style from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const PageTemplate = ({ children }) => {
  return <div className={cx("pageTemplate")}>{children}</div>;
};

export default PageTemplate;
