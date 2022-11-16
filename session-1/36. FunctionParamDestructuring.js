function add(option){
	console.log(option.num1 + option.num2 + option.num3)
}

add({num1:10, num2:20, num3: 30})

// Or 

function add({num1 = 100 ,num2,num3}){
	console.log(num1 + num2 + num3)
}

add({num1:10, num2:20, num3: 30})
