import { configure, addParameters } from "@storybook/react";

function loadStories() {
  const req = require.context("../src", true, /\.story\.(js|tsx?)$/);
  req.keys().forEach((filename) => req(filename));
}

addParameters({
  options: {
    name: 'preact_on_react_sample',
  }
});

configure(loadStories, module);
