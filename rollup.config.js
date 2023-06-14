import config from '@bubkoo/rollup-config'
import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';

export default config({
	output: [
		{
			name: 'domToSvg',
			format: 'umd',
			file: 'dist/dom-to-svg.js',
			sourcemap: true,
		},
	],
	plugins: [
		nodePolyfills( /* options */),
		typescript()
	]
})
