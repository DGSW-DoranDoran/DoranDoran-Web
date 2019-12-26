import axios from 'axios';
import {SERVER} from '../../config/config.json';

class groupRepository {
  getGroup = async (group_id) => {
    let response;
    await axios
      .get(`${SERVER}group/info/`,{
        params: {group_id}
      })
      .then(({data:{data:{groupInfo}}}) => {
        response = groupInfo
      })
      .catch(err => {
        console.log(err);
      });
      return response;
  };

  getComment = async (group_id) => {
    let response;
    
    await axios
      .get(`${SERVER}group/comment/`,{
        params: {
          group_id
        }
      })
      .then(({data:{data:{comments}}}) => {
        response = comments;
      })
      .catch(err => {
        console.log(err);
        return(err);
      });
      return response;
  };

  postComment = async (group_id, member_id, comment,) => {
    await axios
      .post(`${SERVER}group/comment`,{
        group_id,
        member_id,  
        comment
      })
      .then(response => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }

  applyJoin = async (group_id,token) => {
    await axios
      .post(`${SERVER}group/join`, {
        group_id
      },  {headers: { token: token }})
      .then(response => {
        alert("신청 완료");
      })
      .catch(err => {
        console.log(err);
        alert("이미 신청중인 그룹입니다.");
      })
  }

  getMember = async (member_id) => {
    let data;
    await axios
      .get(`${SERVER}auth/info`,{
        params : {
          member_id
        }
      })
      .then(({data:{data:{info}}}) => {
        data = info;
      })
      .catch(err => {
        console.log(err);
      })
    return data;
  }
}

export default new groupRepository();