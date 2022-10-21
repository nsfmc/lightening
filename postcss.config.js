module.exports = (_api) => ({
  plugins: {
    'postcss-import': {root: __dirname, path: ['src/styles']},
    'postcss-mixins': {},
    'postcss-nesting': {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
  },
});
