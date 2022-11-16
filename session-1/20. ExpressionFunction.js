// the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code
console.log(evenOddFunctionObject(21))

var  evenOddFunctionObject = function(number){
	if(number % 2 === 0 ){
	return "event"
}else{
	return "odd"
}
}
console.log(evenOddFunctionObject(20))
