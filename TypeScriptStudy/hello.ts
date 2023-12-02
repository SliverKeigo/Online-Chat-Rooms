window.onload = function () {
	let flag = false; // 布尔类型
	let num = 21; // 数值类型
	let str = 'Keigo'; // 字符串类型
	let str2 = `Keigo,${str}`;
	let msg = `Keigo,${str},${num}`;
	let u: undefined = undefined;
	let n: null = null;

	let x = 1;
	let y = 2;

	// 定义一个函数计算两个数据的合计  对类型进行约束
	function sum(x: number, y: number) {
		return x + y;
	}

	let number = sum(0, 20);

	/*
		引用类型 指定类型
		数组 Object对象 function
	 */

	// 定义一个只有数值的数组
	let arr: number[] = [1, 2, 3, 4, 5];
	// 定义一个二维数组
	let arr1 = [arr];
	// 定义一个元素含有数字和字符串的数组
	let arr2 = ["Keigo", 1024]

	// 另一种定义方式 -- 数组泛型
	let array: Array<number | String> = [1, 2, 3];
	array = ["Keigo", 1024];


	// 定义Object对象
	// 定义一个user对象
	let user: { password: string; sex: number; id: number; username: string; birthday: Date | string } = {
		id: 0,
		username: "",
		password: "",
		sex: 0,
		birthday: new Date()
	}

	// 定义一个接口
	interface User {
		id: number;
		username: string;
		password: string;
		sex: number;
		birthday: string | Date;
	}

	// 实现User接口
	let user2: User = {
		id: 0,
		username: "",
		password: "",
		sex: 0,
		birthday: new Date()
	}
	// 定义一个对象数组
	const item = [{
		name: "Keigo",
		age: 19
	}, {
		name: "Keigo",
		age: 19
	}, {
		name: "Keigo",
		age: 19
	}]


	//  function  函数指定类型
	// 定义一个求和函数 参数为数字类型 返回值为数组类型
	function f(n1: number, n2: number) {
		return [n1 + n2];
	}

	let sum2 = function (n1: number, n2: number) {
		return n1 + n2;
	};

	let sum3 = (n1: number, n2: number): number => n1 + n2


}