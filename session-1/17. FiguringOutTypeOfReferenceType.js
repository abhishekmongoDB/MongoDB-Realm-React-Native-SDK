var studentNameArray = ["Abhishek","Prabhat","Sumit"]

function sayhelloFunction(full_name) {
    console.log("Hello " + full_name)
}

var  studentObject = {
	name: "Abhishek",
	score: 80
}


console.log("Type of Array "+typeof(studentNameArray))
console.log("Type of Function "+typeof(sayhelloFunction))
console.log("Type of Object "+typeof(studentObject))
console.log("Is type of Object is equal to  "+ (typeof(studentObject) ===typeof(studentNameArray)))

// Now the solution is instanceof 
console.log("Instance of Array "+ (studentNameArray instanceof Array))
console.log("Instance of Function "+ (sayhelloFunction instanceof Array))
console.log("Instance of Object "+ (studentObject instanceof Object))
