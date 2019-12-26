import React from "react";
import Navbar from "components/Navbar";
import ChoiceHeader from "components/ChoiceHeader/ChoiceHeader";
import MyPageWrapper from "components/MyPageWrapper/MyPageWrapper";

const MyPageContainer = () => {
  return (
    <>
      <Navbar />
      <MyPageWrapper>
        <ChoiceHeader />
      </MyPageWrapper>
    </>
  );
};

export default MyPageContainer;
