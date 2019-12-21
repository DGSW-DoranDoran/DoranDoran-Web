import axios from 'axios';
import { SERVER } from '../../config/config.json';

class groupRepository {
  getGroup = async (group_id) => {
    let group;

    await axios
      .get(`${SERVER}/group/show/`,{
        group_id
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
      return group;
  };

  getComment = async (group_id) => {
    let comment;

    await axios
      .get(`${SERVER}/group/comment/`,{
        group_id
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
      return comment;
  };

  postComment = async (group_id, member_id, comment) => {
    await axios
      .post(`${SERVER}/group/comment/`,{
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
}

export default new groupRepository();