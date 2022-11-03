import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'new-benchmarks/index.js',
  output: {
    file: 'new-benchmarks/bundle.js',
    format: 'iife',
		name: 'NewBenchmarks'
  },
  plugins: [commonjs()]
};
