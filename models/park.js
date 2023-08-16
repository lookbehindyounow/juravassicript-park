class Park {

	constructor(name, ticketPrice, dinosaurs) {
		this.name = name
		this.ticketPrice = ticketPrice
		this.dinosaurs = dinosaurs
	}

    addDinosaur(dinosaur) {
        this.dinosaurs.push(dinosaur)
    }

    removeDinosaur(dinosaur) {
        this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur),1)
    }

    findMostGuests() {
        let max=0
        let popularDinoId
        for (let i=0;i<this.dinosaurs.length;i++) {
            if (this.dinosaurs[i].guestsAttractedPerDay>max){
                max=this.dinosaurs[i].guestsAttractedPerDay
                popularDinoId=i
            }
        }
        return this.dinosaurs[popularDinoId]
    }

    findAllOfSpecies(species) {
        const dinos=[]
        for (let dino of this.dinosaurs) {
            if (dino.species===species) {
                dinos.push(dino)
            }
        }
        return dinos
    }

    aveGuestsPerDay() {
        let guests=0
        for (let dino of this.dinosaurs) {
            guests+=dino.guestsAttractedPerDay
        }
        return guests
    }

    aveGuestsPerYear() {
        return this.aveGuestsPerDay()*365
    }

    yearlyRevenue() {
        return this.aveGuestsPerYear()*this.ticketPrice
    }

    genocide(species) {
        const leftover=[]
        for (let i=0;i<this.dinosaurs.length;i++) {
            if (this.dinosaurs[i].species!==species) {
                leftover.push(this.dinosaurs[i])
            }
        }
        this.dinosaurs=leftover
    }

    findDiets() {
        let diets={}
        for (let dino of this.dinosaurs) {
            if (dino.diet in diets){
                diets[dino.diet]++
            } else{
                diets[dino.diet]=1
            }
        }
        return diets
    }

}

module.exports = Park;
