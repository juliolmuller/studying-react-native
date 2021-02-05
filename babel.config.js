/* eslint-env node */
module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      'babel-plugin-jsx-control-statements',
    ],
  }
}
