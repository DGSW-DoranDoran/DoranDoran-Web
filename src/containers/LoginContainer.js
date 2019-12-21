import React from "react";
import { observer, inject } from "mobx-react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const LoginContainer = ({ store }) => {
  const { loginStore } = store;

  return (
    <>
      <Input
        value={loginStore.username}
        onChange={({ target: { value } }) => loginStore.usernameOnChange(value)}
        placeholder="Username"
        type="id"
        autocomplete="off"
      ></Input>

      <Input
        value={loginStore.password}
        onChange={({ target: { value } }) => loginStore.passwordOnChange(value)}
        placeholder="password"
        type="password"
        autocomplete="off"
      />

      <Button text="login" type="button" onClick />
    </>
  );
};

export default inject("store")(observer(LoginContainer));
