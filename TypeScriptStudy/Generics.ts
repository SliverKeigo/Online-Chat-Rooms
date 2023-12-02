/**
 * 泛型是指在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * 泛型变量 T     T表示任何类型
 */

/*
    泛型的使用场景
 */
function fn(v1: number, v2: number): Array<number> {
  return [v1, v2]
}

let numbers = fn(1, 2)

// 泛型的写法
function fn1<T>(v1: T, v2: T) {
  return [v1, v2]
}

let fn2 = fn1<string | number>("SliverKeigo", 1024)

// 泛型约束
interface Length {
  length: number
}

// 对泛型进行约束  泛型T的属性一定有长度属性
function fn3<T extends Length>(v: T): number {
  return v.length
}

let fn4 = fn3<string>("SliverKeigo")

// 场景扩展 定义一个函数：判断传入的参数是否一样
let fun: InspectFun = (a, b) => a == b;
fun<number>(1, 1);
let fun2: InspectFun = (a, b) => a == b;
fun2("1", "1")

interface InspectFun {
  <T>(v1: T, v2: T): boolean
}