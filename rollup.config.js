import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'system',
      dir: 'dist',
      format: 'cjs',
      globals: {
        react: 'react',
        '@emotion/styled': 'styled',
        '@emotion/styled/base': '_styled',
        '@emotion/core': 'core',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      nodeResolve(),
      commonjs(),
    ],
  },
];
