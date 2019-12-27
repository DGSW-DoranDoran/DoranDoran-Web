import React from "react";
import styles from "./GroupItem.module.scss";
import { Link } from "react-router-dom";
import { KIM_SERVER } from "config/config.json";

const GroupItem = ({ group }) => {
  return (
    <li className={styles.li}>
      <span className={`${styles.span} ${styles.id}`}>{group.id}</span>
      <span className={styles.span}>
        {group.image && (
          <img
            className={styles.image}
            src={`${KIM_SERVER}/${group.image}`}
            alt="image"
          />
        )}
      </span>
      <Link to={`/group/${group.id}`}>
        <span className={`${styles.span} ${styles.name}`}>{group.name}</span>
      </Link>
      <span className={`${styles.span} ${styles.content}`}>
        {group.content}
      </span>
      <span className={`${styles.span} ${styles.create_time}`}>
        {group.create_time}
      </span>
      <span className={`${styles.span} ${styles.deadline_time}`}>
        {group.deadline_time}
      </span>
      <span className={`${styles.span} ${styles.member_count}`}>
        {group.member_count}
      </span>
      <span className={`${styles.span} ${styles.deadline_member_count}`}>
        {group.deadline_member_count}
      </span>

      <span className={`${styles.span} ${styles.status}`}>{group.status}</span>
      <span className={`${styles.span} ${styles.categoryId}`}>
        {group.categoryId}
      </span>
    </li>
  );
};

export default GroupItem;
