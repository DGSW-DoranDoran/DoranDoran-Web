import React from 'react';

const CommentContent = ({content,user_img,onClick}) => {
 
  let comment = content.map((item, index, array)=> {
    return (
      <div className="group-comment">
        <h1 className="group-c1">
          {array[index].member_id}
        </h1>
        <h3 className="group-c3">
          {array[index].comment}
        </h3>
        {/* <h4 className="group-c4">
          08/28
        </h4> */}
      </div>
    ) 
  })
  return (
      <>
      {comment}
      </>
  );
};

export default CommentContent