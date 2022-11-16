class Passenger{
	constructor(firstName, lastName, flightNumber) {
		this.firstName = firstName
		this.lastName= lastName
		this.flightNumber = flightNumber
	}
     logData() {
        console.log("firstName",this.firstName)
        console.log("lastName",this.lastName)
        console.log("flightNumber",this.flightNumber)
    }
}

let passenger  = new Passenger("Abhishek","Sharma","123");
// console.log(passenger)
passenger.logData()