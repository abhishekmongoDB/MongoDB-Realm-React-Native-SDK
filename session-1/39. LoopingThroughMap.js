let score = new Map();
score.set("math", 90);
score.set("dbms", 70);
score.set("ds", 99);
for (let key of score.keys()){
	console.log(key);
	console.log(score.get(key));
}
for (let value of score.values()){
	console.log(value);
}
for (let entry of score.entries()){
	console.log(entry[0]);	
 	console.log(entry[1]);
}
