import React from 'react';

const Button = ({text="", type, onClick}) => {
  return (<button type={type} onClick={onClick}><span>{text}</span></button>)
}

export default Button;