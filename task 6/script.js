let myPromise = new Promise((resolve, reject) => {
	console.log('Результат будет выведен через 3 секунды');
	setTimeout(
		() => {
			let intVal = Math.ceil(Math.random() * 100);
			if (intVal % 2 == 0) {
				resolve({
					result: 'Завершено успешно',
					randomNumber: intVal
				});
			} else {
				reject({
					result: 'Завершено с ошибкой',
					randomNumber: intVal
				});
			}
		}, 3000
	);
});

myPromise
.then((data) => {
	console.log(`${data.result}. Сгенерированное число - ${data.randomNumber}`);
})
.catch((dataError) => {
	console.log(`${dataError.result}. Сгенерированное число - ${dataError.randomNumber}`);
});