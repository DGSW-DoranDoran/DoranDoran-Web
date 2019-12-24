import React from "react";
import Navbar from "components/Navbar";
import MakeTeam from "components/MakeTeam";
import { inject, observer } from "mobx-react";

const MakeTeamContainer = ({ store }) => {
  const { makeTeamStore } = store;

  const CATEGORY_ENUM = {
    대회: 0,
    식사: 1,
    게임: 2,
    프로젝트: 3,
    기타: 4
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
            image: null
          });
        });
      }
    }
  };

  const clickHandle = input => {
    if (input) {
      //빈 입력이 있는지 없는지
      if (!input.some(el => el === "")) {
        parseInput(input).then(res => {
          console.log(res);
          makeTeamStore.postGroup(res);
        });
        alert("제대로 입력 됌");
        return;
      }
    }
    alert("입력 형식이 잘못되었습니다!");
  };

  return (
    <>
      <Navbar />
      <MakeTeam onClick={clickHandle} />
    </>
  );
};

export default inject("store")(observer(MakeTeamContainer));
