import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "style/Login.scss";

const LoginContainer = ({ store, authenticated }) => {
  const { loginStore } = store;
  const userToken = localStorage.getItem('userToken');
  return (
    <>
      {userToken !== null && (
        <Redirect to={{ pathname: '/group'}} />
      )}
      <div className ="wrapper">
        <div className="session">
          <div className="left"></div>
          <form action="" className="log-in" autocomplete="off">
            <h4 className="log-font">
              DoranDoran <span className="log-span">LogIn</span>
            </h4>
            <p className="log-p">Please Login</p>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.username}
                onChange={({ target: { value } }) =>
                  loginStore.usernameOnChange(value)
                }
                placeholder="Username"
                type="id"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />

              <label className="log-label" for="id">
                UserId:
              </label>
            </div>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.password}
                onChange={({ target: { value } }) =>
                  loginStore.passwordOnChange(value)
                }
                placeholder="password"
                type="password"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="password">
                UserPassword:
              </label>
            </div>

            <button
              className="Auth-button"
              text="login"
              type="button"
              onClick={loginStore.loginOnClick}
            >
              Log in
            </button>
            <a href="/join" className="discrete">
              가입된 아이디가 없나요? 지금 가입하세요!
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default inject("store")(observer(LoginContainer));
