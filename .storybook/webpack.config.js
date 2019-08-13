const rules = [
  {
    test: /\.(js|tsx?)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      sourceMap: true,
    },
  }
];

module.exports = ({ config }) => {
  Array.prototype.push.apply(config.module.rules, rules);
  config.resolve.extensions.push('.js', ',jsx','.ts', '.tsx');
  return config;
};
