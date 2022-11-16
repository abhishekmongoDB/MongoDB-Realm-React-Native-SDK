let courses = new Set();
courses.add("math");
courses.add("ds");
courses.add("dbms");
courses.add("ds");

for (let entry of courses){
	console.log(entry);	
}
console.log(courses.size)
console.log(courses.has("ds"))
console.log(courses.has("dmath"))
courses.clear();
console.log(courses.size)