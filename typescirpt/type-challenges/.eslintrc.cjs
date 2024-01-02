/* eslint-env node */

// "off" 或 0 - 关闭规则
// "warn" 或 1 - 打开规则作为警告（不影响退出代码）
// "error" 或 2 - 打开规则作为错误（退出代码将为 1）

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-extra-boolean-cast": "off", //处理!!value

    "@typescript-eslint/no-explicit-any": "off", //处理any类型
    "no-mixed-spaces-and-tabs": "warn", //处理tab和空格混用
    "no-useless-escape": "off", //处理正则表达式
    "prefer-const": "off", //处理const
    "@typescript-eslint/no-unused-vars": [
      // 对定义了但是未使用的变量或常量做规则
      "warn",
      {
        vars: "all", // 对所有变量生效
        // args: "after-used", // 检测函数参数是否被使用
        args: "none", // 忽略未使用的函数参数
        ignoreRestSiblings: true // 忽略剩余参数和解构赋值中的未使用变量
      }
    ],
    "@typescript-eslint/ban-ts-comment": "off", //处理之前写过的ts-ignore
    "no-constant-condition": ["error", { checkLoops: false }], //处理while(true)这种
    "no-self-assign": ["error", { props: false }], //处理自我赋值
    "no-prototype-builtins": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false //处理空对象
        }
      }
    ],
    "no-empty": "off",
    "vue/prop-name-casing": "off",
    "@typescript-eslint/no-this-alias": "off",
    // 以下待修正完成后删除配置，继承vue/vue3-recommended
    "vue/no-mutating-props": "off",
    "vue/one-component-per-file": "off",
    "vue/no-reserved-component-names": "off",
    "vue/no-ref-as-operand": "off"
  },
  root: true
};
