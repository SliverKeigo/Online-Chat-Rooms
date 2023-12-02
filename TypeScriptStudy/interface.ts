/**
 * 对象的类型 -- 接口
 * 在面向对象语言中，接口是一个很重要的概念，他是对行为的抽象
 * 接口可以用于对[对象的形状(shape) ] 进行描述
 */
    // 定义一个接口
interface User {
    // 接口包含 变量和方法声明
    birthday: string | Date;  // 确定属性(必填)
    id: number;
    password: string;
    sex: number;
    username: string;
    age?: number;  // 不确定属性(可选)
    // 任意属性 不能确定属性的名称
    [anyName: string]: any;
}

// 实现User接口

let user2: User = {
    birthday: new Date(),
    id: 0,
    password: "",
    sex: 0,
    username: "",
    age: 16,
    weight: 50,
    height: 175,
    action: function () {
        return "Play"
    }
}

interface Object {
    name: string,
    age: number
}

let createObj = (obj: Object): void => {
    console.log('username:', obj.name)
    console.log('age:', obj.age)
}
// 接口的应用场景
let jack = {name: "jack", age: 28}
createObj(jack);

// 函数类型约束
interface Sum {
    (n1: number, n2: number): number;
}

let sum: Sum = (n1, n2) => n1 * n2;

const result = {
    code: 200,
    data: {
        id: 1,
        username: "Keigo",
        password: "123456"
    },
    message: ""
}






