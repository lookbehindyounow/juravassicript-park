const Dinosaur = require("./models/dinosaur.js")
const Park = require("./models/park.js")

let park1 = new Park("t-rex park",10000000,[new Dinosaur("t-rex","carnivore",10),
                                                new Dinosaur("gargantuasoar","herbivore",20),
                                                new Dinosaur("smegasorus","omnivore",30),
                                                new Dinosaur("rhino","herbivore",5)])

const dino1=new Dinosaur("pterodactyl","omnivore",70)
park1.addDinosaur(dino1)
park1.removeDinosaur(dino1)
// console.log(park1)

park1.addDinosaur(dino1)
park1.addDinosaur(dino1)
park1.addDinosaur(dino1)
park1.addDinosaur(dino1)
// console.log(park1.findAllOfSpecies("pterodactyl"))
// console.log(park1.aveGuestsPerDay())
// console.log(park1.aveGuestsPerYear())
// console.log(park1.yearlyRevenue())
park1.genocide("pterodactyl")
park1.addDinosaur(dino1)
// console.log(park1.findDiets())
