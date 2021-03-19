if (localStorage.getItem('lastRequest')) {
	let page = localStorage.getItem('page');
	let limit = localStorage.getItem('limit');
	makeRequestImg(page, limit);
}

function makeRequestImg(page, limit) {
	fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
	.then(response => {
		return response.json();
	})
	.then(data => {
		data.forEach(elem => {
			document.body.insertAdjacentHTML('beforeend', `<img src='${elem.download_url}' class="sizeImg">`);
		});
	})
	.catch(error => {
		alert(`Произошла ошибка: ${error}`);
	});
}

function outputImg() {
	let page = +document.getElementById('page').value;
	let limit = +document.getElementById('limit').value;
	let divError = document.getElementById('error');

	if (!(page >= 1 && page <= 10) && !(limit >= 1 && limit <= 10)) {
		divError.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
	} else if (!(page >= 1 && page <= 10)) {
		divError.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
	} else if (!(limit >= 1 && limit <= 10)) {
		divError.innerHTML = 'Лимит вне диапазона от 1 до 10';
	} else {
		divError.innerHTML = '';
		localStorage.setItem('lastRequest', true);
		localStorage.setItem('page', page);
		localStorage.setItem('limit', limit);
		makeRequestImg(page, limit);
	}
}

document.getElementById('request').addEventListener('click', outputImg);