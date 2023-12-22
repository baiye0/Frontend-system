//1.spawn 支持 同步(spawnSync) 和 异步(spawn) 2 种调用方式。
const ChildProcess = require("child_process");
const { spawn, spawnSync } = ChildProcess;

// const pwd = spawnSync('pwd')
// console.log(pwd.stdout.toString())
// const ls = spawnSync('ls', ['-lh'])
// console.log(ls.stdout.toString())

// const { spawn, spawnSync } = ChildProcess
// const file = './../fs/index.mjs'
// const spawnProcess = spawn('git', ['log', '-1', '--pretty="%ci"', file],{stdio:'inherit'})
// spawnProcess.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`)
//   console.log(new Date(data))
// })

// spawnSync("pwd", {
//   stdio: "inherit",
// });

// spawn("ls", {
//   stdio: "inherit",
// });

//2 exec 方法 同样的也是支持同步和异步两种 exec，execSync，

// const { exec, execSync } = ChildProcess;

// const pwd = execSync("pwd");
// console.log(pwd.toString());
// const ls = execSync("ls -lh");
// console.log(ls.toString());

// const file = "./../fs/index.mjs";
// const execProcess = exec(`git log -1 --pretty="%ci" ${file}`);
// execProcess.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
//   console.log(new Date(data));
// });

// 3 execFile 方法  执行某个可执行文件，支持同步和异步两种方式，
// #!/usr/bin/env node

// const hello = 'hello world'
// console.log(hello)
// console.log(process.env)

const { execFile, execFileSync } = ChildProcess;

const file = "./hello";
const execData = execFileSync(file);
console.log(execData.toString());

execFile(file, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
  console.log(stderr);
});

// 4 fork 方法
process.on("message", (msg) => {
  // 监听来自父进程的消息
  console.log(`Message from parent: ${msg}`);
  process.send("Hello from child!"); // 向父进程发送消息
});

const { fork } = ChildProcess;

const child = fork("child.mjs"); // 使用 fork() 方法创建子进程

child.on("message", (msg) => {
  // 监听来自子进程的消息
  console.log(`Message from child: ${msg}`);
});

child.send("Hello from parent!"); // 向子进程发送消息
