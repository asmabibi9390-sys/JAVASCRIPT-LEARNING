// __proto__
const animalMethods = {
 sound: function () {
     return "Animal makes sound";
  }
};
const animal = Object.create(animalMethods);

animal.name = "Cat";

console.log(animal.name);
console.log(animal.sound());
console.log(animal.__proto__);