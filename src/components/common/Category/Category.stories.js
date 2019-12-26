import React from "react";
import Category from "./Category";

export default {
  title: "Components|Category/Category"
};

export const category = () => {
  const CATEGORY = ["대회", "식사", "게임", "프로젝트", "기타"];
  const curCategory = CATEGORY[0];

  return <Category categories={CATEGORY} currentCategory={curCategory} />;
};
