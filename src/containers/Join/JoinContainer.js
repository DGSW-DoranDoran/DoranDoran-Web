import React from "react";
import { Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "style/Login.scss";

const JoinContainer = ({ store }) => {
  const { loginStore } = store;
  return (
    <>
      <div className ="wrapper">
        <div className="session">
          <div className="left"></div>
          <form action="" className="log-in" autocomplete="off">
            <h4 className="log-font">
              DoranDoran <span className="log-span">Join</span>
            </h4>
            <p className="log-p">Please Sign up</p>
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
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.name}
                onChange={({ target: { value } }) =>
                  loginStore.nameOnChange(value)
                }
                placeholder="name"
                type="text"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="password">
                name:
              </label>
            </div>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.phone}
                onChange={({ target: { value } }) =>
                  loginStore.phoneOnChange(value)
                }
                placeholder="phonenumber"
                type="text"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="phonenumber">
                phonenumber:
              </label>
            </div>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.gender}
                onChange={({ target: { value } }) =>
                  loginStore.genderOnChange(value)
                }
                placeholder="gender"
                type="text"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="gender">
                gender:
              </label>
            </div>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.grade}
                onChange={({ target: { value } }) =>
                  loginStore.gradeOnChange(value)
                }
                placeholder="grade"
                type="text"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="grade">
                grade:
              </label>
            </div>
            <div className="floating-label">
              <input
                className="Auth-input"
                value={loginStore.position}
                onChange={({ target: { value } }) =>
                  loginStore.positionOnChange(value)
                }
                placeholder="position"
                type="text"
                autocomplete="off"
                onKeyPress={loginStore.handleKeyPress}
              />
              <label className="log-label" for="position">
                position:
              </label>
            </div>
            <button
              className="Auth-button"
              text="login"
              type="button"
              onClick={loginStore.joinOnClick}
            >
              Sign up
            </button>
            <a href="/login" className="discrete">
              아이디가 있으신가요? 지금 로그인하세요!
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default inject("store")(observer(JoinContainer));
