import { configure } from "@storybook/react";
import "../node_modules/papercss/dist/paper.min.css";

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
