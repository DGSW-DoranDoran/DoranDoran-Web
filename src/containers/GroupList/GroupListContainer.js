import React, { useEffect } from "react";
import GroupList from "components/GroupList";
import Navbar from "components/Navbar";
import Loading from "components/common/Loading/Loading";
import LoadingFail from "components/common/Loading/LoadingFail";
import { inject, observer } from "mobx-react";

const GroupListContainer = ({ store }) => {
  const { groupListStore } = store;
  const groups = groupListStore.groups;

  const CATEGORY_ENUM = {
    대회: 1,
    식사: 2,
    게임: 3,
    프로젝트: 4,
    기타: 5
  };
  const CATEGORY_KEYS = Object.keys(CATEGORY_ENUM);

  //마운트될 때 전체 그룹을 가져온다
  useEffect(() => {
    groupListStore.getGroupAll();
  }, []);

  const parseCategory = category => {
    for (let i = 0; i < CATEGORY_KEYS.length; i++) {
      if (category === CATEGORY_KEYS[i]) {
        return new Promise((resolve, reject) => {
          resolve(CATEGORY_ENUM[CATEGORY_KEYS[i]]);
        });
      }
    }
  };

  const categoryChangeHandle = category => {
    groupListStore.setCurCategory(category);
    parseCategory(category).then(category_id => {
      groupListStore.getGroupByCategory(category_id);
    });
  };

  const decideRender = () => {
    let render = <div>초기상태</div>;

    switch (groupListStore.loadingState) {
      case -1:
        render = <LoadingFail />;
        break;
      case 1:
        render = <Loading />;
        break;
      case 2:
        render = (
          <>
            <Navbar />
            <GroupList
              groups={groups}
              curCategory={groupListStore.curCategory}
              setCurCategory={groupListStore.setCurCategory}
              onCategoryChange={categoryChangeHandle}
            />
          </>
        );
        break;
      default:
    }

    return render;
  };

  return decideRender();
};

export default inject("store")(observer(GroupListContainer));
