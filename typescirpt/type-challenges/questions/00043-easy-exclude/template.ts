type MyExclude<T, U extends T> = T extends U ? never : T;

// 对于使用extends关键字的条件类型（即上面的三元表达式类型），
// 如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，
// 则使用分配律计算最终的结果
