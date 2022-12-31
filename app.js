//Topics
/* 
1) map
2) filter
3) find
4) reduce
5) new Set()
6) dynamic object keys
7) array desctructing
8) rest operator
9) spread operator
10) Optional chaining
11) callback function
12) Promises = (resolve,reject)
13) handling promises using async await(try,catch) and .then.catch
14) height/ width (window or any)
15) TimeStamps
16) array.at(index)
17) element helper: querySelector, querySelectorAll
18) for, forEach, 
19) Object.keys(object).values().entries()
20) string.includes('string || letter'), array.includes(item)
*/

/*==================================== Start==================================== */
// 01: map method
/* const people = [
	{ name: 'John', age: 23, position: 'Employee' },
	{ name: 'Martin', age: 21, position: 'Employee' },
	{ name: 'Eliza', age: 28, position: 'Manager' },
];

const names = people.map((person) => {
	return `<h2>${person.name}</h2>`;
});

const resultContainer = document.querySelector('.result');
resultContainer.innerHTML = names.join('');
 */
// summary
/* 
1) map method runs through each element of array and return the same size as original array.

*/

// 02: ES6 Unique Values =>[ ...new Set()]

/* const menu = [
	{ name: 'pancakes', category: 'breakfast' },
	{ name: 'rice', category: 'dinner' },
	{
		name: 'broccoli',
		category: 'lunch',
	},
	{
		name: 'cheese',
		category: 'breakfast',
	},
	{
		name: 'mushrooms',
		category: 'breakfast',
	},
];

const distinctCategories = [
	'all',
	...new Set(menu.map((category) => `${category.category}`)),
];
resultContainer = document.querySelector('.result');
resultContainer.innerHTML = distinctCategories
	.map((category) => {
		return `<button>${category}</button>`;
	})
	.join(' <br/> <br/>  '); */

// 03 dynamic object key :use .dot use to chanage the key dynamically
/* const state = 'appState';
const app = {
	[state]: true,
};

app['computer'] = 'apple';
app.age = 25;
console.log(app);
 */

// 04 filter and find

// const people = [
// 	{ name: 'John', age: 23, position: 'Employee' },
// 	{ name: 'Martin', age: 21, position: 'Employee' },
// 	{ name: 'Eliza', age: 18, position: 'Manager' },
// ];

// manipulate the size of array

//filter - may returns may if matched (kati chan sabai jhikera liyera auu)
/* const youngPeople = people.filter((person) => person.age < 22);
console.log(youngPeople);
const resultContainer = document.querySelector('.result');
resultContainer.innerHTML = youngPeople
	.map((person) => `<h4>${person.name}</h4>`)
	.join(' '); */

//find -> returns first matched  (cha ki chaina vanera check garna ko lagi matrai.)

/* const youngPeople = people.find((person) => person.age < 22);
console.log(youngPeople);
const resultContainer = document.querySelector('.result');
resultContainer.innerHTML = youngPeople
	.map((person) => `<h4>${person.name}</h4>`)
	.join(' ');
 */

// 05 reduce -> reduces our array to a single value
/* 
const people = [
	{ name: 'John', age: 23, position: 'Employee' },
	{ name: 'Martin', age: 21, position: 'Employee' },
	{ name: 'Eliza', age: 18, position: 'Manager' },
];

const totalAge = people.reduce((acc, cur) => {
	acc[cur.name] = cur.age;
	return acc;
}, {}); //you can return object too
console.log(totalAge);

const resultContainer = document.querySelector('.result');
resultContainer.innerHTML = totalAge;
 */

// 06 Array desctructing
/* const fruits = ['apple', 'banana', 'grapes', 'orange'];

const [firstFruit] = fruits;
console.log(firstFruit);

const personInfo = {
	name: 'John',
	age: 23,
};

const { age: myAge } = personInfo;

console.log(myAge); */

//07 Rest operator

// const friends = ['sunita', 'eliza', 'ram', 'sanam'];
// const [sunita, ...restFriends] = friends;

// console.log(restFriends);
// console.log(sunita);

// 08 Spread Operator
/* const names = 'wikipedia';
const info = {
	name: 'ram',
	id: 1,
};

const letters = [...names];
console.log(letters);

const infos = { ...info };
console.log(infos); */

// 09 Optional chaining

// forEach(()=>{})
// console.log(person?.location?.timezone?.offset || 'Hello World');

// 10) callback function

/* function makeUppercase(value) {
	console.log(value.toUpperCase());
}

makeUppercase('Hello World');

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	console.log('clicked');
	setTimeout(() => {
		btn.style.backgroundColor = 'green';
		btn.style.color = 'red';
	}, 3000);
}); */
//===========================================================
// 11) Promises to eliminate callback hell

// Promise lai handle garne deuta tarika cha
// 1) async await => try, catch
// 2) .then.catch
//  promise can be inbuild of custom made
//===========================================================
// use to write async code sync way

// async await or .then.catch()

// consume/use promises
// Pending , rejected, fulfilled
/* 
const promise = new Promise((resolve, reject) => {
	// resolve('Hello world');
	reject('there was a problem');
});

//cunsume in two ways: promise
promise.then((result) => console.log(result)).catch((err) => console.log(err));
const consume = async () => {
	try {
		const result = await promise;
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

consume();
 */

// 12) fetch api
//handing promise using .then.catch
/* fetch(url)
	.then((result) =>
		result
			.json()
			.then((result) => result)
			.catch((err) => console.log(err))
	)
	.catch((err) => console.log(err));
//handing promise using async await, try catch
const getData = async () => {
	try {
		const result = await fetch(url);
		const data = await result.json();
	} catch (error) {
		console.log(error);
	}
};
 */

// 13) width/height of any element or window
// window.innerWidth;/*  */
// windwo.innerHeight;
// window.getBoundingClientRect();

//14 timestamps
/* console.log(new Date());
console.log(Date.now());
people = ['ram', 'shyam', { id: Date.now(), name: 'Hari' }];
console.log(people);

console.log(Date.now());
console.log(new Date(1672474103376));
const futureDate = new Date(Date.now + 60 * 1000);
console.log(futureDate);

console.log(new Date());
console.log(Date.now());

const firstDate = new Date();
const secondDate = new Date(2021, 1, 6);

console.log(secondDate);
 */

// 15 es2020
// Array.at(-1); //at(index)

// 16 element helper
/* const element = document.querySelector('.classname or #id');
const elementAll = document.querySelectorAll('.classname');

const names = ['milan', 'asim']; */
//17 for in loop
/* for (const name in names) {
	console.log(name);
} */

// 17 object.keys().values().entries()
/* const info = {
	name: 'milan',
	age: 24,
};
console.log(Object.keys(info));
console.log(Object.values(info));
console.log(Object.entries(info)); */

// 18 new Set() methods
// const fruits = ['grapes', 'apple', 'orange', 'apple'];
// const unique = new Set(fruits);
// console.log(unique);

// 19 string.includes array.includes
// const firstName = 'john';
// const result = firstName.includes('j', 0);
// console.log(result);
/* 
const names = ['ram', 'shyam', 'karan', 'arjun'];
const value = names.includes('shyam', 1);
console.log(value); */
