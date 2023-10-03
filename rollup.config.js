import { defineConfig } from "rollup"
import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"

export default defineConfig({
	input: "src/main.ts",
	output: {
		format: "umd",
		dir: "dist",
		sourcemap: true,
	},
	plugins: [typescript(), commonjs(), terser()],
})
