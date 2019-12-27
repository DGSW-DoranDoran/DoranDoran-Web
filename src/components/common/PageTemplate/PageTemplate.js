import React from "react";
import style from "./PageTemplate.scss";
import classNames from "classnames/bind";
import { Redirect } from "react-router-dom";

const cx = classNames.bind(style);

const PageTemplate = ({ children }) => {
  const userToken = localStorage.getItem('userToken');

  return (
  <>
    {userToken === null && (
      <Redirect to={{ pathname: '/'}} />
    )}
    <div className={cx("pageTemplate")}>{children}</div>
  </>
  );
};

export default PageTemplate;
