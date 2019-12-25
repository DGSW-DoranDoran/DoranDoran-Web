import React, { useRef, useEffect } from "react";
import styles from "./MakeTeam.module.scss";

const MakeTeam = ({ onClick }) => {
  const CATEGORY = ["대회", "식사", "게임", "프로젝트", "기타"];

  const categories_ref = useRef(null);
  const name_ref = useRef(null);
  const content_ref = useRef(null);
  const deadline_time_ref = useRef(null);
  const deadline_member_count_ref = useRef(null);

  const img_dropbox_ref = useRef(null);

  const submitClickHandle = () => {
    const categories = categories_ref.current;
    const name = name_ref.current;
    const content = content_ref.current;
    const deadline_time = deadline_time_ref.current;
    const deadline_member_count = deadline_member_count_ref.current;

    onClick([
      categories.options[categories.selectedIndex].value,
      name.value,
      content.value,
      deadline_time.value,
      deadline_member_count.value
    ]);
  };

  const handleFiles = files => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) {
        continue;
      }
      const img = document.createElement("img");
      img.classList.add(styles.img);
      img.file = file;
      img_dropbox_ref.current.appendChild(img);
      const reader = new FileReader();
      reader.onload = (function(aImg) {
        return function(e) {
          console.log(aImg);
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    img_dropbox_ref.current.addEventListener(
      "dragenter",
      e => {
        e.stopPropagation();
        e.preventDefault();
        console.log("dragEnter");
      },
      false
    );
    img_dropbox_ref.current.addEventListener(
      "dragover",
      e => {
        e.stopPropagation();
        e.preventDefault();
        console.log("dragOver");
      },
      false
    );
    img_dropbox_ref.current.addEventListener(
      "drop",
      e => {
        e.stopPropagation();
        e.preventDefault();

        const dt = e.dataTransfer;
        const files = dt.files;

        handleFiles(files);
        console.log("drop");
      },
      false
    );
  }, []);

  return (
    <div className={styles.contain}>
      <div className={styles.image_contain} ref={img_dropbox_ref}>
        <span className={styles.image_placeholder}>
          그룹을 대표하는 사진을 넣어주세요!
        </span>
      </div>
      <div className={styles.input_contain}>
        <div>
          <span>카테고리</span>
          <select name="categories" ref={categories_ref}>
            {CATEGORY.map(category => (
              <option name={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>그룹 이름</span>
          <input
            type="text"
            placeholder="그룹 이름"
            ref={name_ref}
            className={styles.input}
          />
        </div>
        <div>
          <span>그룹 설명</span>
          <textarea ref={content_ref}></textarea>
        </div>
        <div>
          <span>마감 일자</span>
          <input
            type="text"
            placeholder="마감 일자"
            ref={deadline_time_ref}
            className={styles.input}
          />
        </div>
        <div>
          <span>제한 인원</span>
          <input
            type="text"
            placeholder="제한 인원"
            ref={deadline_member_count_ref}
            className={styles.input}
          />
        </div>
        <div>
          <button onClick={submitClickHandle}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default MakeTeam;
