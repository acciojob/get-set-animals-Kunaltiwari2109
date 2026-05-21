//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`The ${this._species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(dogspecies){
		super(dogspecies);
	}
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(catspecies){
		super(catspecies);
	}
	purr(){
		console.log("purr")
	}
}

const myCat = new Dog ("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Cat ("Golden retriever");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
