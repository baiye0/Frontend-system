// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
// const buildOptions = {
//   input: ["src/index.js","src/util.js"],
//   output: [{
//     // 产物输出目录
//     dir: "dist/es",
//     // 产物格式
//     format: "esm",
//   },{
//     dir:"dis/cjs",
//     format:'cjs'  //多产物配置
//   }],
// };

//不同入口可能对应的配置不一样，分开写。
/**
 * @type { import('rollup').RollupOptions }
 */
// const buildIndexOptions = {
//   input: ["src/index.js"],
//   output: [
//     // 省略 output 配置
//   ],
// };

/**
 * @type { import('rollup').RollupOptions }
 */
// const buildUtilOptions = {
//   input: ["src/util.js"],
//   output: [
//     // 省略 output 配置
//     {
//       // 产物输出目录
//       dir: path.resolve(__dirname, "dist"),
//       // 以下三个配置项都可以使用这些占位符:
//       // 1. [name]: 去除文件后缀后的文件名
//       // 2. [hash]: 根据文件名和文件内容生成的 hash 值
//       // 3. [format]: 产物模块格式，如 es、cjs
//       // 4. [extname]: 产物后缀名(带`.`)
//       // 入口模块的输出文件名
//       entryFileNames: `[name].js`,
//       // 非入口模块(如动态 import)的输出文件名
//       chunkFileNames: "chunk-[hash].js",
//       // 静态资源文件输出文件名
//       assetFileNames: "assets/[name]-[hash][extname]",
//       // 产物输出格式，包括`amd`、`cjs`、`es`、`iife`、`umd`、`system`
//       format: "cjs",
//       // 是否生成 sourcemap 文件
//       sourcemap: true,
//       // 如果是打包出 iife/umd 格式，需要对外暴露出一个全局变量，通过 name 配置变量名
//       name: "MyBundle",
//       // 全局变量声明
//       globals: {
//         // 项目中可以直接用`$`代替`jquery`
//         jquery: "$",
//       },
//       external: ['react', 'react-dom'] //不想让 Rollup 进行打包，也可以通过 external 进行外部化
//     },
//   ],
// };

// export default [buildIndexOptions, buildUtilOptions];


import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from 'rollup-plugin-terser'

/**
 * @type { import('rollup').RollupOptions }
 */
export default {
    input: ["src/index.js"],
    output: [
      {
        dir: "dist/es",
        format: "esm",
        plugins: [terser()] //output.plugins中配置的插件是有一定限制的，只有使用Output 阶段相关钩子的插件才能够放到这个配置中，
      },
      {
        dir: "dist/cjs",
        format: "cjs",
      },
    ],
    // 通过 plugins 参数添加插件
    plugins: [resolve(), commonjs()], //需要插件做一些额外的操作，如处理cmd规范的库
  };