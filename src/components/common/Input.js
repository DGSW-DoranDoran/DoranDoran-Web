import React from 'react';

const Input = ({value, onChange, placeholder, type, autocomplete, classname}) => {

  return (
    <input
     style={{width: '100%', height: 'art'}}
     value={value}
     onChange={onChange}
     placeholder={placeholder}
     type={type} autocomplete={autocomplete}
    />
  )
}

export default Input;