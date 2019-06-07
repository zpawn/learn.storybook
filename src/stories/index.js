import React from "react";

import { storiesOf } from "@storybook/react";

import Button from "../components/Button";
import Input from "../components/Input";

const handlerSubmit = e => {
  e.preventDefault();
};

storiesOf("Forms", module).add("SignIn", () => {
  return (
    <form onSubmit={handlerSubmit}>
      <Input type="text" name="login" placeholder="Login" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">Submit</Button>
    </form>
  );
});
