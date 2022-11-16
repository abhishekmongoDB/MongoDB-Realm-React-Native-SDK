const myEmailAddress = "abhishek.sharma@mongodb.com"

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const isEmailValid = validateEmail(myEmailAddress)
console.log("My Email is Valid " + isEmailValid)


const myInvalidEmailAddress = "abhishek.sharma@mongodb"

const isEmailInvalid = validateEmail(myInvalidEmailAddress)
console.log("My Email is Valid " + isEmailInvalid)