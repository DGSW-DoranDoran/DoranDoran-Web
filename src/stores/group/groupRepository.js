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
        console.log(response)
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
        console.log(comments)
      })
      .catch(err => {
        console.log(err);
        return(err);
      });
      return response;
  };

  postComment = async (group_id, member_id, comment) => {
    await axios
      .post(`${SERVER}/group/comment`,{
        group_id,
        member_id,  
        comment
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  applyJoin = async (group_id,member_id) => {
    await axios
      .post(`${SERVER}/group/join`, {
        member_id,
        group_id
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default new groupRepository();