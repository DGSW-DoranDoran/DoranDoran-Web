import React, { useRef } from "react";

const MakeTeam = ({ onClick }) => {
  const CATEGORY = ["대회", "식사", "게임", "프로젝트", "기타"];

  const categories_ref = useRef(null);
  const name_ref = useRef(null);
  const content_ref = useRef(null);
  const deadline_time_ref = useRef(null);
  const deadline_member_count_ref = useRef(null);

  const clickHandle = () => {
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

  return (
    <>
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
        <input type="text" placeholder="그룹 이름" ref={name_ref} />
        <span>그룹 설명</span>
        <textarea ref={content_ref}></textarea>
        <span>마감 일자</span>
        <input type="text" placeholdr="마감 일자" ref={deadline_time_ref} />
        <span>제한 인원</span>
        <input
          type="text"
          placeholder="제한 인원"
          ref={deadline_member_count_ref}
        />
      </div>
      <div>
        <button onClick={clickHandle}>생성</button>
      </div>
    </>
  );
};

export default MakeTeam;
