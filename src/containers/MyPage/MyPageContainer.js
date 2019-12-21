import React from "react";
import Navbar from "components/Navbar";
import MyPageWrapper from "components/MyPageWrapper/MyPageWrapper";
import { useEffect } from "react";

const MyPageContainer = () => {
  return (
    <>
      <Navbar />
      <MyPageWrapper />
    </>
  );
};

export default MyPageContainer;
