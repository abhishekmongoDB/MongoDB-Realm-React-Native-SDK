class BMD{
	constructor(name, model, year) {
		this.name = name
		this.model= model
		this.year = year
	}
   start(){
		console.log("Start")
    }
   stop(){
		console.log("Stop")
    }
}



class ThreeSeries extends BMD{
	constructor(name, model, year, cruiseControl) {
		super(name, model, year)
		this.cruiseControl = cruiseControl
	}
	// override if needed
	start(){
	   console.log("Push Button Start")	
	}
}




