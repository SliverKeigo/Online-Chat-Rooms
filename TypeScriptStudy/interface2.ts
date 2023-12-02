// 定义data
interface Data {
  id: number,
  username: string,
  password: string
}

// 定义result接口
interface Result {
  code: number,
  data: Data
  message: string
}

const result: Result = {
  code: 200,
  data: {
    id: 1,
    username: "Keigo",
    password: "123456"
  },
  message: ""
}

// 接口继承
interface Read {
  read: Function;
}

// User 继承 Read
interface User extends Read, Data {
  id: number,
  name: string,
  age: number
}

let user: User = {
  password: '',
  username: '',
  age: 21,
  id: 1,
  name: "Keigo",
  // 将name:"Keigo" 作为参数传入到read方法中
  read: function (name: string) {
    console.log(name, "正在读书");
  }
}

/**
 * 多重继承使用场景
 * 员工入职
 */
interface Person {
  name: string;
  age: number;
  gender: string;
  id?: number
}

interface Capacity {
  set(v: string): void;

  get(): string;
}

interface Staff extends Person, Capacity {
  phone: string
  IDCard?: number;
  diploma: string
}

let rola: Staff = {
  age: 16,
  diploma: '本科',
  gender: '女',
  name: 'rola',
  phone: '15727337891',
  set(v: string): void {
  },
  get(): string {
    return ""
  }
}

/**
 * 树状结构
 */

interface Tree {
  id: string
  name: string,
  parentId: number,
  children: Tree[]
}

const tree: Tree = {
  id: '1',
  name: '1',
  parentId: 0,
  children: [{
    id: '2',
    name: '2',
    parentId: 1,
    children: [{
      id: '4',
      name: '4',
      parentId: 2,
      children: []
    }]
  },
    {
      id: '3',
      name: '3',
      parentId: 1,
      children: [{
        id: '5',
        name: '5',
        parentId: 3,
        children: []
      }]
    }
  ]
}








