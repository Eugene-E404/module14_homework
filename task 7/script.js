function outputListTask () {
	let id = +document.getElementById('text').value;
	
	fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
	.then(response => {
		let result = response.json();
		return result;
	})
	.then(data => {
		if (data.length == 0) {
			throw 'Пользовтель с указанным id не найден';
		}
		data.forEach(task => {
			if (task.completed == true) {
				document.getElementById('listTask').insertAdjacentHTML('beforeend', `<li class ="del">${task.title}</li>`)			
			} else {
				document.getElementById('listTask').insertAdjacentHTML('beforeend', `<li>${task.title}</li>`);
			}
		});
	})
	.catch(error => alert(`Произошла ошибка: ${error}`));
}

document.getElementById('button').addEventListener('click', outputListTask);