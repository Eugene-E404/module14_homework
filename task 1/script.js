let studentsXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let parser = new DOMParser();
let studentsDOM = parser.parseFromString(studentsXML, 'text/xml');

let studentList = studentsDOM.getElementsByTagName('student');

let obj = {list: []};
let i = 0;
for (let student of studentList) {
	obj.list[i] = new Object;
	obj.list[i].name = (`${student.querySelector('first').innerHTML} ${student.querySelector('second').innerHTML}`);
	obj.list[i].age = student.querySelector('age').innerHTML;
	obj.list[i].prof = student.querySelector('prof').innerHTML;
	obj.list[i++].lang = student.querySelector('name').getAttribute('lang');
}
console.log(obj);





































