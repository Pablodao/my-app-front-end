let config = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        meaninglessFileNames: ["index", "styles"],
        pure: true,
        ssr: true,
      },
    ],
    [
      "formatjs",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        ast: true,
      },
    ],
  ],
};

module.exports = config;
