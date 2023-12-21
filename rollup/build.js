// // build.js
// // const rollup = require("rollup");
// import * as rollup from 'rollup'

// // 常用 inputOptions 配置
// const inputOptions = {
//   input: "./src/index.js",
//   external: [],
//   plugins:[resolve(), commonjs(), terser()]
// };

// const outputOptionsList = [
//   // 常用 outputOptions 配置
//   {
//     dir: 'dist/es',
//     entryFileNames: `[name].[hash].js`,
//     chunkFileNames: 'chunk-[hash].js',
//     assetFileNames: 'assets/[name]-[hash][extname]',
//     format: 'esm',
//     sourcemap: true,
//     globals: {
//       lodash: '_'
//     }
//   }
//   // 省略其它的输出配置
// ];

// async function build() {
//   let bundle;
//   let buildFailed = false;
//   try {
//     // 1. 调用 rollup.rollup 生成 bundle 对象
//     bundle = await rollup.rollup(inputOptions);
//     console.log(bundle)
//     for (const outputOptions of outputOptionsList) {
//       // 2. 拿到 bundle 对象，根据每一份输出配置，调用 generate 和 write 方法分别生成和写入产物
//       const { output } = await bundle.generate(outputOptions);
//       console.log(outputOptions)
//       await bundle.write(outputOptions);
//     }
//   } catch (error) {
//     buildFailed = true;
//     console.error(error);
//   }
//   if (bundle) {
//     // 最后调用 bundle.close 方法结束打包
//     await bundle.close();
//   }
//   process.exit(buildFailed ? 1 : 0);
// }

// build();

// // 通过 rollup.rollup方法，传入 inputOptions，生成 bundle 对象；
// // 调用 bundle 对象的 generate 和 write 方法，传入outputOptions，分别完成产物和生成和磁盘写入。
// // 调用 bundle 对象的 close 方法来结束打包。

import * as rollup from 'rollup';
import * as util from 'util'

async function build() {
    //build阶段并没有进行模块打包，只存储各个模块的内容与依赖关系，同时暴露generate和write方法
  const bundle = await rollup.rollup({
    input: ['./src/index.js'],
  });
  // console.log(util.inspect(bundle));

  // {
  //   cache: {
  //     modules: [
  //       {
  //         ast: 'AST 节点信息，具体内容省略',
  //         code: 'export const a = 1;',
  //         dependencies: [],
  //         id: '/Users/code/rollup-demo/src/data.js',
  //         // 其它属性省略
  //       },
  //       {
  //         ast: 'AST 节点信息，具体内容省略',
  //         code: "import { a } from './data';\n\nconsole.log(a);",
  //         dependencies: [
  //           '/Users/code/rollup-demo/src/data.js'
  //         ],
  //         id: '/Users/code/rollup-demo/src/index.js',
  //         // 其它属性省略
  //       }
  //     ],
  //     plugins: {}
  //   },
  //   closed: false,
  //   // 挂载后续阶段会执行的方法
  //   close: [AsyncFunction: close],
  //   generate: [AsyncFunction: generate],
  //   write: [AsyncFunction: write]
  // }

  //output阶段，
  const result = await bundle.generate({
    format: 'esm',
  });
  console.log('result',result)

  // {
  //   output: [
  //     {
  //       exports: [],
  //       facadeModuleId: '/Users/code/rollup-demo/src/index.js',
  //       isEntry: true,
  //       isImplicitEntry: false,
  //       type: 'chunk',
  //       code: 'const a = 1;\n\nconsole.log(a);\n',
  //       dynamicImports: [],
  //       fileName: 'index.js',
  //       // 其余属性省略
  //     }
  //   ]
  // }

// Build Hook即在Build阶段执行的钩子函数，在这个阶段主要进行模块代码的转换、AST 解析以及模块依赖的解析，那么这个阶段的 Hook 对于代码的操作粒度一般为模块级别，也就是单文件级别。
// Ouput Hook(官方称为Output Generation Hook)，则主要进行代码的打包，对于代码而言，操作粒度一般为 chunk级别(一个 chunk 通常指很多文件打包到一起的产物)。
}
build();