const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  
  function animalWithDevice(deadlyDevice) {
    return {animalType, deadlyDevice};
  }

  return animalWithDevice;
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');

var sharkWithFrickinCannon = sharkCreator('Cannon');