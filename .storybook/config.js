import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

import "../node_modules/papercss/dist/paper.min.css";

const req = requireContext("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
