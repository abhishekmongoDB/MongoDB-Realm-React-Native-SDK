function evenOrOdd(number) {
    console.log(arguments[1]) // value at index 1 in arguments
    console.log(arguments?.length) // length of arguments
    console.log(evenOrOdd?.length) // get named arguments
    if (number % 2 === 0) {
        return "event"
    } else {
        return "odd"
    }
}

console.log(evenOrOdd(8,2,3,4,5))
