import React from "react";
import styles from "./GroupList.module.scss";
import Category from "components/common/Category";
import GroupItem from "./GroupItem";

const GroupList = ({ groups, curCategory, onCategoryChange }) => {
  const CATEGORY = ["대회", "식사", "게임", "프로젝트", "기타"];

  return (
    <div className={styles.contain}>
      <div className={styles.category_contain}>
        <Category
          categories={CATEGORY}
          onCategoryChange={onCategoryChange}
          currentCategory={curCategory}
        />
      </div>
      <div className={styles.group_contain}>
        <div className={styles.list_contain}>
          <ul className={styles.ul}>
            {groups.map(group => (
              <GroupItem group={group} key={group.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
