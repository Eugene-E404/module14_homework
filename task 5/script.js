if (localStorage.getItem("name")) {
	alert(`Добрый день, ${localStorage.getItem("name")}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem("date")}`);
} else {
	let nameUser = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');

	localStorage.setItem('name', nameUser);
	localStorage.setItem('date', new Date());
}