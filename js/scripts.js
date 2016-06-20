// Backend logic

//Shelter
function Shelter (){
  this.animals = [];
}

Shelter.prototype.addAnimal = function (animal) {
  this.animals.push(animal);
};

Shelter.prototype.listAnimals = function (adopted) {
    var htmlText = ""
    this.animals.forEach(function(animal,index){
      if (animal.adopted === adopted) {
        htmlText = htmlText +
        '<div class="col-md-3 animal" id="' + index + '">' +
        '<h3>Dog Name</h3>' +
        '<img src="img/' + animal.image + '" alt="" />' +
        '<p>' +
        animal.type+ ', ' + animal.age + 'Years Old, ' + animal.breed + ', ' + animal.size + ', ' + animal.gender + ', ' + animal.furLength + ' Fur'
        '</p>' +
        '</div>';
      }
  });
  return htmlText;
};

// Animal
function Animal (id,type,name, age, size, furLength, breed, gender, description, image, dateAdded){
  this.id = id;
  this.type = type;
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.size=size;
  this.furLength = furLength;
  this.gender = gender;
  this.description = description;
  this.image = image;
  this.adopted = 0;
  this.dateAdded = dateAdded;
}

Animal.prototype.adopt = function () {
  this.adopted = 1;
};

Animal.prototype.showDetails = function(id) {
  var htmlText = ""
  //add here code for modal with description
  return htmlText
};


//Front End
$(document).ready(function(){


$("div#animal-display").on("click",".animal",function(){
  var animalId = this.id;
//  modal.append (newShelter.animal[id].showDetails());


});


});
