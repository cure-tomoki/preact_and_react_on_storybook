# preact _and_react_on_storybook

A sample demonstration how to run React and Preact on same instance of storybook.


## context
Storybook currently does not support the ability to run multiple frameworks in the same Storybook instance.
This means, when developing projects containing components built with different frameworks (such as monorepos), you will need to set up a Storybook instance for each framework, which breaks the whole purpose of having a centralised place for all the components.
Although this functionality is [planned](https://storybook.canny.io/roadmap/p/add-ability-to-run-multiple-frameworks-in-1-storybook) for future scopes, discussions have become quite stale.
