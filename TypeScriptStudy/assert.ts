/**
 * TS 类型断言
 */

let count: any = 100;
let num = <number>count;
let num2 = count as number;
console.log(typeof num)

interface Student {
  name: string;
  age: number;
  sex: number;
}

// 插入类型断言
let student: Student = <Student>{}
// 对student对象属性进行赋值
student.name = '张三';
student.age = 18;
student.sex = 1;