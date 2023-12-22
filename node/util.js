const util = require("util");

// util.inspect(object, [options])，常与 console.log 搭配使用，可以友好的将对象转为字符串，打印更加友好。
console.log(util.inspect(testObj, { depth: Math.Infinity }));
// 当然实际开发中可以使用 javascript-stringify 这个库，可以将对象转为字符串，支持循环引用。

// util.format(format[, ...args]) 类似于 C 语言中的使用 printf 方法的传参，

console.log(util.format("%s:%s", "foo", "bar")); // 'foo:bar'
console.log(util.format("%d + %d = %d", 1, 2, 3)); // '1 + 2 = 3'

console.log(
  util.format("My name is %j", { firstName: "John", lastName: "Doe" })
);

// util.callbackify 可以将一个返回 promise 的函数转为回调形式的
function foo() {
  return Promise.resolve("hello world");
}

function bar() {
  return Promise.reject(new Error("error reject"));
}

const callbackFoo = util.callbackify(foo);
const callbackBar = util.callbackify(bar);

callbackFoo((err, ret) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(ret);
});

callbackBar((err, ret) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(ret);
});

// util.promisify(original) 用于将常规带有回调函数的方法转为返回 Promise 对象的方法。
//以 fs.readFile 举例。
const fs = require("fs");
// 将 fs.readFile 方法转换为返回 Promise 的函数
const fsRead = util.promisify(fs.readFile)
// 使用 Promise 的方式读取文件内容并输出
fsRead('./package.json').then((data) => {
  console.log(data.toString())
})