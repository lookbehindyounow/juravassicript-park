const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dino1, dino2, dino3, dino4, dino5

  beforeEach(function () {
    dino1=new Dinosaur("t-rex","carnivore",10),
    dino2=new Dinosaur("gargantuasoar","herbivore",20),
    dino3=new Dinosaur("smegasorus","omnivore",30),
    dino4=new Dinosaur("rhino","herbivore",5)
    dino5=new Dinosaur("pterodactyl","omnivore",70)
    park = new Park("t-rex park",10000000,[dino1,dino2,dino3,dino4])
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 't-rex park')
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 10000000)
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs,[dino1,dino2,dino3,dino4])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dino5)
    assert.strictEqual(park.dinosaurs[4],dino5)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dino3)
    assert.deepStrictEqual(park.dinosaurs,[dino1,dino2,dino4])
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
// , function () {
    
//   }