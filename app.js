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
