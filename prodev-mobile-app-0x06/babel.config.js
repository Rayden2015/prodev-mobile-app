const nativewind = require("nativewind/babel");

module.exports = function (api) {
  api.cache(true);

  const nativewindPlugins = nativewind().plugins ?? [];

  return {
    presets: ["babel-preset-expo"],
    plugins: [...nativewindPlugins],
  };
};

