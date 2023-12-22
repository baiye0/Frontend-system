const fs = require("fs");

// 同步读取
const syncData = fs.readFileSync("./test.txt", "utf-8");
console.log("====sync read====");
console.log(syncData);

// 回调形式 异步读取
fs.readFile("./test.txt", "utf-8", (err, callbackData) => {
  if (!err) {
    console.log("====callback read====");
    console.log(callbackData);
  }
});

// promise形式 异步读取
fs.promises.readFile("./test.txt", "utf-8").then((promiseData) => {
  console.log("====promise read====");
  console.log(promiseData);
});



//读取文件
const txtContent = fs.readFileSync('./test.txt', 'utf-8')

const buf = fs.readFileSync('./test.txt')

// 打印Buffer大小
console.log(buf.length)
// 修改前2个字符
buf.write('gg')

// 输出修改后的内容
console.log(buf.toString())

//写入文件
fs.writeFileSync('./newTest.txt', 'hello world')

// 读取一个图片
const imgBuf = fs.readFileSync('./logo.png')
console.log('isBuffer', Buffer.isBuffer(imgBuf), 'bufferSize', imgBuf.length)

// 写入到新文件
fs.writeFileSync('newLogo.png', imgBuf, 'binary')

//获取文件信息
console.log(fs.statSync('./test.txt'))
console.log(fs.statSync('./test-dir'))


const fileInfo = fs.statSync('./test.txt')
// 判断是文件还是目录
console.log(fileInfo.isFile(), fileInfo.isDirectory())

const dirInfo = fs.statSync('./test-dir')
// 判断是文件还是目录
console.log(dirInfo.isFile(), dirInfo.isDirectory())

try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync('not_exist.txt')
} catch (e) {
  console.log('文件不存在')
}

//追加输出
// 使用 fs.appendFileSync() 方法向指定文件追加内容
// 参数1：指定文件路径
// 参数2：要追加的内容
fs.appendFileSync('test.txt', 'Hello World2!');

//移动/重命名文件
fs.renameSync('test.txt', 'test2.txt')

fs.renameSync('test2.txt', 'test-dir/test2.txt')

//删除文件
fs.unlinkSync('test-dir/test2.txt')
// fs.rmSync('test-dir/test2.txt')

// 删除 test-dir 目录（包含其子文件）
fs.rmSync('test-dir', { recursive: true })

//目录操作
//通过 fs.readdirSync 获取目录下的文件信息。
const files = fs.readdirSync('test-dir')
console.log(files)

//可通过指定第二个参数 withFileTypes:true 使返回结果包含类型
const files2 = fs.readdirSync('test-dir', { withFileTypes: true })
console.log(files2.map((f) => ({ name: f.name, isDirectory: f.isDirectory() })))

//创建目录
//通过 fs.mkdirSync 创建目录,可以指定 recursive:true 选项来创建多级目录
fs.mkdirSync('test-dir/test-sub-dir', { recursive: true })

//删除目录
//通过 fs.rmdirSync 删除目录，recursive:true ,删除目录及其子目录
fs.rmdirSync('test-dir/test-sub-dir', { recursive: true })
fs.rmSync('test-dir/test-sub-dir', { recursive: true })

//监听目录变更
//通过 fs.watch() 方法监听目录变更 ,监听当前目录下所有的文件和子目录中的文件
fs.watch('test-dir',{recursive:true}, (eventType, filename) => {
  console.log(`event type is: ${eventType}`)
  if (filename) {
    console.log(`filename provided: ${filename}`)
  } else {
    console.log('filename not provided')
  }
})

// 获取指定目录下所有文件的绝对路径
function getAllfiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath,{ withFileTypes: true })

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(path.resolve(dirPath, file.name), arrayOfFiles)
    } else {
        arrayOfFiles.push(path.resolve(dirPath, file.name))
    }
  })

  return arrayOfFiles
}
