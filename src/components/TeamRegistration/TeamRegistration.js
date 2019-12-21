import React from "react";

const TeamRegistration = props => {
  var { category, member_count, deadline_member, value, handleChange } = props;

  /* handleChange = e => {
    setState = { value: e.target.value };
  };
  handleSubmit = e => {
    alert("선택한 " + state.value + "(으)로 신청되었습니다.");
  }; */

  return (
    <form onSubmit={this.handleSubmit} className="RegistForm">
      <div className="CategoryPos">
        <label>
          카테고리 선택<small>(필수)</small>
          <select value={value} onChange={handleChange} required>
            <option value="category">{category}</option>
            <option value="category">밥</option>
            <option value="category">공모전</option>
          </select>
        </label>
      </div>
      <div className="AttendPos">
        <h4>응시대상자</h4>
        <input type="checkbox" id="grade1" /> <label for="grade1">고1</label>
        <input type="checkbox" id="grade2" /> <label for="grade2">고2</label>
        <input type="checkbox" id="grade3" /> <label for="grade3">고3</label>
      </div>
      <div className="TitlePos">
        <label for="title">
          제목 입력<small>(필수) </small>
        </label>
        <input
          type="text"
          name="title-select"
          id="title"
          placeholder="예시: 2019 IOT 아이디어 경진대회 공모전"
          required
        />
      </div>
      <div className="Date_Pos">
        <label for="deadline_time">
          마감 날짜선택<small>(필수)</small>
        </label>
        <input type="datetime" id="deadline_time" />
        <div className="DateRequiredTxt">
          <small>
            마감시간이 종료되거나 기간 내에 모집인원이 채워지면 자동으로
            마감처리가 됩니다.
          </small>
        </div>
      </div>
      <div className="RegistTxtField">
        <label for="registTxtField">
          글 내용<small>(선택) 최대 1000자 가능</small>
        </label>
        <textarea id="registTxtField" maxLength="1000" />
      </div>

      <input type="submit" value="등록" />
    </form>
  );
};

export default TeamRegistration;
