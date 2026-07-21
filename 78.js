// Prorotype Chain
const animalMethods = {
   sound: function () {
   return "Meow";
 }
};
function createAnimal(name) {
  const animal = Object.create(animalMethods);
    animal.name = name;
    return animal;
}
const cat = createAnimal("Kitty");

console.log(cat.name);
console.log(cat.sound());