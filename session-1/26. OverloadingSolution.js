function add() {
    if (arguments.length == 3) {
        return arguments[0] + arguments[1] + arguments[2]
    } else if (arguments.length == 2) {
        return arguments[0] + arguments[1]
    }
}

console.log(add(1, 2, 3))
console.log(add(1, 2))
console.log(add(1, 2,3,4))