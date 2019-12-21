import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import "style/Login.scss";
import LoginBackground from '../assets/LoginBackground.jpeg';

const LoginContainer = ({ store }) => {
  const { loginStore } = store;

  return (
    <>
    <div className="login-container">
      <div className="login-left">
        <img src={LoginBackground} alt="LoginBackground" className="login-img"/>
      </div>
      <div className="login-right">
        <h1 className="login-h1">Login</h1>
      <div>
      <Input 
       value={loginStore.username} 
       onChange={ ({ target: { value } }) => loginStore.usernameOnChange(value)} 
       placeholder="Username"
       type="id"
       autocomplete="off"
      >
      </Input>
      <Input 
       value={loginStore.password} 
       onChange={ ({ target: { value } }) => loginStore.passwordOnChange(value)} 
       placeholder="password"
       type="password"
       autocomplete="off"
        />
        </div>
        <div>
        <Button text="login" type="button" onClick={loginStore.loginOnClick}/>
        </div>
        <div>

        </div>
      </div>
      </div>
   </>
  );
}

export default inject('store')(observer(LoginContainer));
