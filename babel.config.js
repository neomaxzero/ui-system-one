const presets = [
  [
    '@babel/env',
    {
      modules: false,
    },
  ],
  ['@babel/preset-react'],
];

const plugins = ['@emotion'];

module.exports = { presets, plugins };
