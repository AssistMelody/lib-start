import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const config = {
    input:'src/main.js',
    output:[
        { file: 'dist/bundle.js', format: 'esm' },
        {
            file: 'dist/bundle.es5.js',
            format: 'umd',
            name:'$router',
            plugins: [getBabelOutputPlugin({
                 presets: [['@babel/preset-env']],
                 allowAllFormats : true 
                })]
        }
    ],
  plugins: [
    commonjs(),
    terser()
  ],
};

export default config