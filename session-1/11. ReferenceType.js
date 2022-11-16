// Object Oriented Concept

var user = new Object()
user.name = "Abhishek Sharma"
user.age = 30
console.log("User Data ", user)


//// var objectVar1 = new Object()  // Memory location 1
//// var objectVar2 = objectVar1  // Memory location 1

var objectVar2 = user
console.log("objectVar2 Data ", objectVar2)

user =  null
objectVar2 =  null
console.log("objectVar2 is null or not ", objectVar2)
