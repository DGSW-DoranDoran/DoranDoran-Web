import React, { useRef, useEffect, useState } from "react";
import styles from "./MakeTeam.module.scss";
import { IconContext } from "react-icons";
import {
  FaListUl,
  FaChalkboardTeacher,
  FaClipboard,
  FaRegCalendarTimes,
  FaUserTimes
} from "react-icons/fa";
import Category from "components/common/Category";
import SuccessMakeTeam from "components/MakeTeam/SuccessMakeTeam";
import FailMakeTeam from "components/MakeTeam/FailMakeTeam";

const MakeTeam = ({
  onSubmit,
  curCategory,
  categoryChangeHandle,
  postState
}) => {
  const CATEGORY = ["대회", "식사", "게임", "프로젝트", "기타"];

  const name_ref = useRef(null);
  const content_ref = useRef(null);
  const deadline_time_ref = useRef(null);
  const deadline_member_count_ref = useRef(null);

  const img_dropbox_ref = useRef(null);

  const num_txt_ref = useRef(null);
  const date_txt_ref = useRef(null);
  const name_txt_ref = useRef(null);

  const [imageObj, setImageObj] = useState(null);

  const submitClickHandle = () => {
    const name = name_ref.current;
    const content = content_ref.current;
    const deadline_time = deadline_time_ref.current;
    const deadline_member_count = deadline_member_count_ref.current;

    console.log(imageObj);

    onSubmit([
      curCategory,
      name.value,
      content.value,
      deadline_time.value,
      deadline_member_count.value,
      imageObj
    ]);
  };

  const handleFiles = files => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!file.type.startsWith("image/")) {
        continue;
      }

      setImageObj(file);

      const imgEl = document.createElement("img");
      imgEl.classList.add(styles.img);
      imgEl.file = file;
      //console.log(imgEl.file);
      img_dropbox_ref.current.appendChild(imgEl);

      const reader = new FileReader();
      reader.onload = (function(aImg) {
        return function(e) {
          aImg.src = e.target.result;
        };
      })(imgEl);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    img_dropbox_ref.current.addEventListener(
      "dragenter",
      e => {
        e.stopPropagation();
        e.preventDefault();
      },
      false
    );
    img_dropbox_ref.current.addEventListener(
      "dragover",
      e => {
        e.stopPropagation();
        e.preventDefault();
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
      },
      false
    );
  }, []);

  return (
    <>
      <div className={styles.contain}>
        <div className={styles.image_contain} ref={img_dropbox_ref}>
          <span className={styles.image_placeholder}>
            그룹을 대표하는 사진을 넣어주세요!
          </span>
        </div>
        <div className={styles.input_contain}>
          <div className={styles.block}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaListUl />
            </IconContext.Provider>
            <span
              className={styles.input_title}
              style={{ marginBottom: "1rem" }}
            >
              카테고리
            </span>
            <Category
              categories={CATEGORY}
              onCategoryChange={categoryChangeHandle}
              currentCategory={curCategory}
            />
          </div>
          <div className={styles.block}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaChalkboardTeacher />
            </IconContext.Provider>
            <span className={styles.input_title}>그룹 이름</span>
            <input
              type="text"
              placeholder="그룹 이름"
              ref={name_ref}
              className={styles.input}
              onChange={e => {
                name_txt_ref.current.innerHTML = e.target.value;
              }}
            />
            <span className={styles.preview} ref={name_txt_ref} />
          </div>
          <div className={styles.block}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaClipboard />
            </IconContext.Provider>
            <span className={styles.input_title}>그룹 설명</span>
            <textarea
              ref={content_ref}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>
          <div className={styles.block}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaRegCalendarTimes />
            </IconContext.Provider>
            <span className={styles.input_title}>마감 일자</span>
            <input
              type="text"
              placeholder="0000-00-00 00:00"
              ref={deadline_time_ref}
              className={styles.input}
              onChange={e => {
                date_txt_ref.current.innerHTML = e.target.value;
              }}
            />
            <span className={styles.preview} ref={date_txt_ref} />
          </div>
          <div className={`${styles.block} ${styles.deadline_member_contain}`}>
            <IconContext.Provider value={{ className: styles.icon }}>
              <FaUserTimes />
            </IconContext.Provider>
            <span className={styles.input_title}>제한 인원</span>
            <input
              type="text"
              placeholder="제한 인원"
              ref={deadline_member_count_ref}
              className={styles.input}
              onChange={e => {
                num_txt_ref.current.innerHTML = e.target.value;
              }}
            />
            <span className={styles.preview} ref={num_txt_ref} />
            <span className={styles.preview}>인</span>
          </div>
          <div className={styles.submit_contain}>
            <button onClick={submitClickHandle} className={styles.submit}>
              그룹 생성
            </button>
          </div>
        </div>
      </div>
      {postState === 2 && <SuccessMakeTeam />}
      {postState === -1 && <FailMakeTeam />}
    </>
  );
};

export default MakeTeam;
