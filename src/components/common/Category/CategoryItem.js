import React from "react";
import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ category, onClick }) => {
  return (
    <li
      className={styles.li}
      onClick={() => {
        onClick(category);
      }}
    >
      {category}
    </li>
  );
};

export default CategoryItem;
