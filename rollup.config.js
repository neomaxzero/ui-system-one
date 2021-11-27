import path from 'path';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'system',
      exports: 'auto',
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
      postcss({
        modules: true,
        use: ['sass'],
        extract: path.resolve('dist/one.css')
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
];
