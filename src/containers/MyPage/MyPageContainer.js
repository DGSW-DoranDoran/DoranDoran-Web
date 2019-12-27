import React, { useState, useEffect } from "react";
import "../../style/MyPage.scss";
import { Navbar, ChoiceHeader, Privacy } from "../../components/";
import { observer, inject } from "mobx-react";

const MyPageContainer = (store, memberId) => {
  // const { userInfo } = store;
  // const [flag, setFlag] = useState(0);

  // const fetchData = async () => {
  //   userInfo.setMemberId(memberId);
  //   userInfo.setMemberId();
  //   userInfo.getMember(userInfo.memberId);
  //   setFlag(1);
  // };

  // useEffect(() => {
  //   if (flag === 0) fetchData();
  // });

  const handleNavigateClick = type => {
    if (type === "MASTER") {
      // MASTER 이동
    } else if (type === "ASSISTANT") {
      // ASSISTANT 이동
    } else if (type === "WAITING") {
      // WAITING 이동
    }
  };
  return (
    <div className="myPageWrapper">
      <Navbar />
      <Privacy
      // name={userInfo.member.name}
      // image={userInfo.member.image}
      // gender={userInfo.member.gender}
      // phone_number={userInfo.member.phone}
      // grade={userInfo.member.grade}
      // position={userInfo.member.position}
      // member_id={userInfo.memberId}
      />
      <ChoiceHeader onClick={handleNavigateClick} />
    </div>
  );
};

export default inject("store")(observer(MyPageContainer));
