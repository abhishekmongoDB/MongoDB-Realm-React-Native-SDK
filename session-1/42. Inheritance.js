class BMD{
	constructor(name, model, year) {
		this.name = name
		this.model= model
		this.year = year
	}
}

class ThreeSeries extends BMD{
	constructor(name, model, year, cruiseControlEnabled) {
		super(name, model, year)
		this.cruiseControlEnabled = cruiseControlEnabled
	}
}



class FiveSeries extends BMD{
	constructor(name, model, year, parkingAssistEnabled) {
	super(name, model, year)
	this.parkingAssistEnabled = parkingAssistEnabled
	}
}
