/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject{  //isn't a class so much as a constructor function
  constructor(atttributes){  //constructor is explicitly called
    this.newCreatedAt = attributes.createdAt,  //values assigned as they would normally be in a function
    this.newName = attributes.name,
    this.newDimensions = attributes.dimensions
  }
  destroy(){  //protoype is implicit here
    return `${this.newName} was removed from the game`
  }
}

class CharacterStats extends GameObject{  //the extends is logically equivalent to .call
  constructor(charAttributes){
    super(charAttributes); //logically equivalent to Object.create
    this.newHealthPoints = charAttributes.healthPoints
  }
  takeDamage(){
    return `${this.newName} took damage`;
  }
}

class Humanoid extends CharacterStats{ //values from GameObject and CharcterStats can be referenced from here
  constructor(humanAttributes){
    super(humanAttributes)
    this.newTeam = humanAttributes.team,
    this.newWeapons = humanAttributes.weapons,
    this.newLanguage = humanAttributes.language
  }
  greet(){
    return `${this.newName} offers a greeting in ${this.newLanguage}`
  }
}


// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.