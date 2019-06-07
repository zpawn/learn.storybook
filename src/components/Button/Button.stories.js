import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export const actions = {
  onClick: action("onClick")
};

storiesOf("Buttons", module).add("default", () => (
  <Button {...actions}>Button</Button>
));
