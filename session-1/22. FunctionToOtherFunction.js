var ids = [3,31,45,34,11]
ids.sort()
console.log(ids);


// ================================================================

ids.sort(function(num1, num2){
    console.log("num1==>"+num1)
    console.log("num2==>"+num2)
	return num1-num2
})

console.log(ids);
