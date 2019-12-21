import React from 'react';

const Input = ({value, onChange, placeholder, type, autocomplete}) => {

  return (
    <input
     value={value}
     onChange={onChange}
     placeholder={placeholder}
     type={type} autocomplete={autocomplete}
    />
  )
}

export default Input;