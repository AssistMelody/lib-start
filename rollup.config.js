import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const config = {
	input: "src/main.ts",
	output: [
		{ file: "dist/bundle.esm.js", format: "esm" },
		{
			file: "dist/bundle.es5.js",
			format: "umd",
			name: "$router",
			plugins: [
				getBabelOutputPlugin({
					presets: ["@babel/preset-env"],
					allowAllFormats: true,
				}),
			],
		},
	],
	plugins: [
		commonjs(),
		typescript({
			tsconfig: "./tsconfig.json",
		}),
		terser(),
	],
};

export default config;
