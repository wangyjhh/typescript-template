import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"

module.exports = {
	input: "src/main.ts",
	output: {
		file: "dist/main.js",
		format: "umd",
		sourcemap: true,
	},
	plugins: [typescript(), commonjs(), terser()],
}
