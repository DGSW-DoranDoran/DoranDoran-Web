import React from 'react';
import {KIM_SERVER} from '../../config/config.json';

const groupContent =({content,image=""}) => {
  let newImage=""
  if(image!==null){
    newImage = `${KIM_SERVER}` + image.slice(6);
  }
  return(
  <div className="group-groupContent">
    { image!==null &&
      <img src={newImage} alt="GroupImage"/>
    }
    <h1 className="group-h1">
      {content}
    </h1>
  </div>
  );
}

export default groupContent;