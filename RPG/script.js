'use strict';

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const imageEl = document.querySelector('.image');
const weapons = [
  { name: 'stick', power: rand(4)},
  { name: 'dagger', power: rand(30)},
  { name: 'claw hammer', power: rand(50)},
  { name: 'sword', power: rand(100) }
];

// const monsters = [
//   {
//     name: "slime",
//     level: rand(4),
//     health: rand(100),
//   },
//   {
//     name: "fanged beast",
//     level: rand(10),
//     health: rand(200),
//   },
//   {
//     name: "dragon",
//     level: rand(25),
//     health: rand(300),
//   }
// ]; 


// Only the Dragon doesn't change
const monsters = [
    {
      name: "dragon",
      level: rand(25),
      health: rand(300),
    }
  ]; 
  
  // We need the slimes and the fanged beasts to change grind for gold & xp
  function createSlime() {
    return {
      name: "slime",
      level: rand(2),
      health: rand(15),
    };
  }
  
  function createFangedBeast() {
    return {
      name: "fanged beast",
      level: rand(8),
      health: rand(60),
    };
  }


const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\".",
    image: "town-612x612.jpg"
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
    image: "store-1024x1024.jpg"
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
    image: "cave-612x612.jpg"
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
    image: "monster-612x612.jpg"
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    image: "win-612x612.jpg"
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
    image: "lose-612x612.jpg",
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" ,
    image: "victory-612x612.jpg",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    image: "easterEgg-612x612.jpg",
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
  imageEl.src = location.image;
}


// functions
function rand(middle) {
    return Math.round((Math.random() * .5  + .75) * middle)
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
    fighting = createSlime(); // Create a new slime instance
    goFight();
  }
  
function fightBeast() {
    fighting = createFangedBeast(); // Create a new fanged beast instance
    goFight();
  }
  
function fightDragon() {
    fighting = monsters[0]; // Reference the static dragon
    goFight();
  }
  
function goFight() {
    update(locations[3]);
    monsterHealth = fighting.health;
    monsterStats.style.display = "block";
    monsterName.innerText = fighting.name;
    monsterLevelText.innerText = fighting.level;
    monsterHealthText.innerText = monsterHealth;
  }

function attack() {
    const monsterHit = rand(getMonsterAttackValue(fighting.level));
    console.log("monster level: ", fighting.level);
    console.log("Monster hit with: ",monsterHit);
    text.innerText = `The ${fighting.name} attacks. \n` ;
    text.innerText += ` You lose ${monsterHit} health. \n`
    text.innerText += ` You attack ${fighting.name} with your ${weapons[currentWeapon].name}.\n`;
    health -= monsterHit;
    healthText.innerText = health;

  if (isMonsterHit()) {
    const yourHit = rand(weapons[currentWeapon].power + rand(xp)) ;
    text.innerText += ` The ${fighting.name} loses ${yourHit} health.`
    monsterHealth -= yourHit;
    monsterHealthText.innerText = monsterHealth;    
  } else {
    text.innerText += " You miss.";
  }

  
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - rand(xp);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;  // if health falls below 20, 100% hit chance
}

function dodge() {
    console.log('Monster Attack Value: ', getMonsterAttackValue(fighting.level));
    const healthChangesBy = rand(getMonsterAttackValue(fighting.level));
    console.log('health Changes By: ',healthChangesBy);
    if (Math.random() <= .20 ) {
        text.innerText = "You dodge the attack from the " + fighting.name +". "
        text.innerText += " This bought you enough time to recover " + healthChangesBy + " health points."
        health += healthChangesBy;
        healthText.innerText = health; 
    } else {
        text.innerText = "You weren't able to completely dodge the attack from the  " + fighting.name +". "
        text.innerText += " You lose " + healthChangesBy + " health points ."
        health -= healthChangesBy;
        healthText.innerText = health; 
        if (health <= 0 ) {lose()}
    }
}

// function defeatMonster() {
//   const goldGain = rand(fighting.level * 5);
//   const xpGain = rand(fighting.level);
//   console.log("You looted "+ goldGain + " gold from this monster.");
//   console.log('You gained '+ xpGain + " experience fighting this monster." );
//   gold += goldGain;
//   xp += xpGain;
//   goldText.innerText = gold;
//   xpText.innerText = xp;
//   update(locations[4]);
// }

function defeatMonster() {
    const goldGain = rand(fighting.level * 5);
    const xpGain = rand(fighting.level);
    gold += goldGain;
    xp += xpGain;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
  
    // Set up an array with button indices
    let buttonIndices = [0, 1, 2];
    // Determine which button will be the easter egg button
    const easterEggButtonIndex = Math.floor(Math.random() * 3); // Random number between 0, 1, or 2
  
    // Remove the easter egg button index from the array
    buttonIndices.splice(easterEggButtonIndex, 1);
  
    // Assign the easter egg function to the randomly selected button
    document.getElementById(`button${easterEggButtonIndex + 1}`).onclick = easterEgg;
  
    // Assign goTown to the other two buttons using remaining indices
    document.getElementById(`button${buttonIndices[0] + 1}`).onclick = goTown;
    document.getElementById(`button${buttonIndices[1] + 1}`).onclick = goTown;
  }

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}