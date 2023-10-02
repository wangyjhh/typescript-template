import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"

module.exports = {
	// 项目入口
	input: "src/main.ts",
	// 打包后的出口和设置
	output: {
		file: "dist/main.js",
		format: "umd",
		sourcemap: true,
	},
	plugins: [typescript(), commonjs(), terser()],
}
