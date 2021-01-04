import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'system',
      file: 'dist/system.js',
      format: 'iife',
      globals: 'react',
    },
    output: {
      dir: 'dist',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];
