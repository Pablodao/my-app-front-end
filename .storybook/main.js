module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
};