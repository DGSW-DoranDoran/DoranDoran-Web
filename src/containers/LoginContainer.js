import React from "react";
import { observer, inject } from "mobx-react";
import "style/Login.scss";

const LoginContainer = ({ store }) => {
  const { loginStore } = store;

  return (
    <>
      <div className="wrapper">
        <div className="session">
          <div className="left">
            <path
              className="st01"
              d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"
            />
          </div>
          <form action="" className="log-in" autocomplete="off">
            <h4>
              DoranDoran <span>LogIn</span>
            </h4>
            <p>Welcome! Sign in and get more information.</p>
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
              />

              <label for="email">UserId:</label>
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
              />
              <label for="password">UserPassword:</label>
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
