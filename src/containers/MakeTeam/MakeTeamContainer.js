import React from "react";
import Navbar from "components/Navbar";
import MakeTeam from "components/MakeTeam";
import { inject, observer } from "mobx-react";

const MakeTeamContainer = ({ store }) => {
  const { makeTeamStore } = store;

  const CATEGORY_ENUM = {
    대회: 1,
    식사: 2,
    게임: 3,
    프로젝트: 4,
    기타: 5
  };
  const CATEGORY_KEYS = Object.keys(CATEGORY_ENUM);

  const parseInput = input => {
    for (let i = 0; i < CATEGORY_KEYS.length; i++) {
      if (input[0] === CATEGORY_KEYS[i]) {
        input[0] = CATEGORY_ENUM[CATEGORY_KEYS[i]];
        return new Promise((resolve, reject) => {
          resolve({
            category_id: input[0],
            name: input[1],
            content: input[2],
            deadline_time: input[3],
            deadline_member_count: Number(input[4]),
            image: input[5]
          });
        });
      }
    }
  };

  const submitHandle = input => {
    if (input) {
      //빈 입력이 있는지 없는지
      if (!input.some(el => el === "")) {
        parseInput(input).then(res => {
          makeTeamStore.postGroup(res);
        });
        alert("요청을 전송합니다");
        return;
      }
    }
    alert("입력 형식이 잘못되었습니다!");
  };

  const categoryChangeHandle = category => {
    makeTeamStore.setCurCategory(category);
  };

  return (
    <>
      <Navbar />
      <MakeTeam
        onSubmit={submitHandle}
        curCategory={makeTeamStore.curCategory}
        categoryChangeHandle={categoryChangeHandle}
      />
    </>
  );
};

export default inject("store")(observer(MakeTeamContainer));
