import React, { useRef } from "react";
import styles from "./Category.module.scss";
import CategoryItem from "./CategoryItem";

const Category = ({ categories, onCategoryChange, currentCategory }) => {
  const ul_ref = useRef(null);

  const onClick = selected => {
    onCategoryChange(selected);
  };

  const boxClickHandle = e => {
    ul_ref.current.classList.toggle(styles.show);
  };

  return (
    <div className={styles.box_contain}>
      <div onClick={boxClickHandle} className={styles.select_box}>
        <div className={styles.selected_item_container}>
          <span className={styles.selected_item}>{currentCategory}</span>
        </div>
        <ul className={styles.ul} ref={ul_ref}>
          {categories.map(category => (
            <CategoryItem
              className={styles.li}
              key={category}
              category={category}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
