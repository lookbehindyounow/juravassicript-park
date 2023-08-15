const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dino1, dino2, dino3, dino4, dino5

  beforeEach(function () {
    dino1=new Dinosaur("t-rex","carnivore",10),
    dino2=new Dinosaur("gargantuasoar","herbivore",20),
    dino3=new Dinosaur("smegasorus","omnivore",30),
    dino4=new Dinosaur("rhino","herbivore",5)
    dino5=new Dinosaur("pterodactyl","omnivore",70)
    park = new Park("t-rex park",10000000,[dino1,dino2,dino3,dino4])
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, 't-rex park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 10000000)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs
    for (let i=0;i<park.dinosaurs.length;i++) {
      assert.strictEqual(actual[i],[dino1,dino2,dino3,dino4][i])
    }
  });

  it('should be able to add a dinosaur to its collection', function () {
    const actual=dino5
    park.addDinosaur(dino5)
    assert.strictEqual(actual,park.dinosaurs[park.dinosaurs.length-1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const actual = [dino1,dino2,dino3]
    park.removeDinosaur(dino4)
    for (let i=0;i<park.dinosaurs.length;i++) {
      assert.strictEqual(actual[i],park.dinosaurs[i])
    }
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
// , function () {
    
//   }