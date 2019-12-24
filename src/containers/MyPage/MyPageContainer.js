import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import MyPageWrapper from "components/MyPageWrapper/MyPageWrapper";

const MyPageContainer = () => {
  return (
    <>
      <Navbar />
      <MyPageWrapper />
    </>
  );
};

export default MyPageContainer;
