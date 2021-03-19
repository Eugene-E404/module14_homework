let obj = {
	name: 'Anton',
	age: 36,
	skills: ['Javascript','HTML','CSS'],
	salary: 80000
}
let JSONstring = JSON.stringify(obj);

console.log('Это объект: ', obj);
console.log('Это JSON строка: ', JSONstring);

