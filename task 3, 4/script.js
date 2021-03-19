function makeReport() {
	let year = document.getElementById('targetYear').value;
	
	if (year == "") {
		alert('Выберите, пожалуйста, год');
		return;
	}

	(function makeRequest() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');
		xhr.onload = function (){
			if (xhr.status != 200) alert(`Статус ответа ${xhr.status}`);
			let arrayData = JSON.parse(xhr.response);
			let targetObj;
			
			console.log('Все запрошенные данные: ', arrayData);
			
			for (obj of arrayData) {
				if (obj.year == year) {
					targetObj = obj;
					break;
				}
			}
			
			document.getElementById('tableReport').innerHTML = `
				<table>
				  <tr>
					<td>1 кв.</td>
					<td>2 кв.</td>
					<td>3 кв.</td>
					<td>4 кв.</td>
				  </tr>
				  <tr>
					<td>${targetObj.sales.q1}</td>
					<td>${targetObj.sales.q2}</td>
					<td>${targetObj.sales.q3}</td>
					<td>${targetObj.sales.q4}</td>
				  </tr>
				</table>
				<a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${year} год',data:[${targetObj.sales.q1}, ${targetObj.sales.q2}, ${targetObj.sales.q3}, ${targetObj.sales.q4}]}]}}">Открыть график</a>
			`
		}
		xhr.onerror = () => alert(`Статус ответа ${xhr.status}`);
		xhr.send();
	})();
}