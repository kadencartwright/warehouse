module.exports = {
  extends: "../../packages/config/eslint-preset.js",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
};
