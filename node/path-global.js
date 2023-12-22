// console.log(__dirname)

// console.log(process.argv)

// console.log(process.cwd())
// console.log('hello')

// process.exit()

// console.log(process.arch)


// process.stdout.write('hello')
// process.stdout.write(' ')
// process.stdout.write('world')
// process.stdout.write('\n')

// process.stdin.on('data', (data) => {
//     console.log(`User input: ${data}`);
//   });

const path = require('path')

// console.log(path.join(__dirname, 'test.js'))
// console.log('=== path.resolve ===')
// console.log(path.resolve('a', 'b', 'c'))
// console.log(path.resolve('/hello', 'world', './a', 'b'))

console.log(path.dirname(process.cwd()))
console.log(path.dirname('/a/b/c'))

// console.log('=== path.basename ===')
// console.log(path.basename('a/b/c.js'))
// console.log(path.basename('a/b/c.js', '.js'))

// console.log('=== path.extname ===')
// console.log(path.extname('a/b/c.js'))
// console.log(path.extname('a/b/c'))

// console.log('=== path.normalize ===')
// console.log(path.normalize('a//b//c/d/e/..'))

// console.log('=== path.parse ===')
// console.log(path.parse('/home/user/dir/file.txt'))

console.log('=== path.sep ===')
console.log('foo/bar/baz'.split(path.sep))
const dir = 'users'
const file = 'index.html'
console.log(dir + path.sep + file)