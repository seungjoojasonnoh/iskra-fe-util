import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: {
    file: './lib/bundle.js', // 출력 경로
    format: 'es', // 출력 형식
    sourcemap: true, // 소스 맵을 켜놔서 디버깅을 쉽게 만들자
  },
  plugins: [
    typescript(),
    commonjs({ include: 'node_modules/**' }),
    peerDepsExternal(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-typescript', '@babel/preset-env'],
      extensions: ['.js', '.ts'],
    }),
  ],
};
