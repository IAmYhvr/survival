var savegame = JSON.parse(localStorage.getItem("save")); //Parse the save in localStorage


var game = {
  wood: 30,
  stone: 30,              //Currency
  food: 30,

  woodtot: 0,            //Currency Trackers
  stonetot: 0,
  foodtot: 0,

  metal: 30,             //Alt-Currency

  research: 0,

  researchproj1: false,  //Stuff
  researchproj2: false,

  axes: 0,
  axeCost: 1e1,
  pickaxes: 0,           //Tier 1
  pickaxeCost: 1e1,
  spears: 0,
  spearCost: 1e1,

  lumberjacks: 0,
  lumberjackCost: 1e4,
  miners: 0,             //Tier 2
  minerCost: 1e4,
  hunters: 0,
  hunterCost: 1e4,

  forests: 0,
  forestCost: 1e7,
  quarries: 0,             //Tier 3
  quarryCost: 1e7,
  farms: 0,
  farmCost: 1e7,

  prestigeWTBC: 0,
  prestigeBanked: 1,      //Prestige
  mForPres: 1e3,

  timeSinceAutoSave: 0,   //Other
  relocation1: false
}

function updateScreen() {
  if (game.wood >= 1e6) {
    document.getElementById("wood").innerHTML = game.wood.toExponential(2);
  } else {
    document.getElementById("wood").innerHTML = game.wood.toFixed(1);
  }
  if (game.stone >= 1e6) {
    document.getElementById("stone").innerHTML = game.stone.toExponential(2);  //Update GUI after load
  } else {
    document.getElementById("stone").innerHTML = game.stone.toFixed(1);
  }
  if (game.food >= 1e6) {
    document.getElementById("food").innerHTML = game.food.toExponential(2);    //BTW, the .toExponential(2) makes it so that it shows 1.00e+0
  } else {
    document.getElementById("food").innerHTML = game.food.toFixed(1);
  }
  if (game.metal >= 1e6) {
    document.getElementById("metal").innerHTML = game.metal.toExponential(2);    //BTW, the .toExponential(2) makes it so that it shows 1.00e+0
  } else {
    document.getElementById("metal").innerHTML = game.metal.toFixed(1);
  }

  document.getElementById("axes").innerHTML = game.axes;
  if (game.axeCost >= 1e6) {
    document.getElementById("axeCost").innerHTML = game.axeCost.toExponential(2);
  } else {
    document.getElementById("axeCost").innerHTML = game.axeCost.toFixed(1);
  }
  document.getElementById("pickaxes").innerHTML = game.pickaxes;
  if (game.pickaxeCost >= 1e6) {
    document.getElementById("pickaxeCost").innerHTML = game.pickaxeCost.toExponential(2);
  } else {
    document.getElementById("pickaxeCost").innerHTML = game.pickaxeCost.toFixed(1);
  }
  document.getElementById("spears").innerHTML = game.spears;
  if (game.spearCost >= 1e6) {
    document.getElementById("spearCost").innerHTML = game.spearCost.toExponential(2);
  } else {
    document.getElementById("spearCost").innerHTML = game.spearCost.toFixed(1);
  }

  document.getElementById("lumberjacks").innerHTML = game.lumberjacks;
  if (game.lumberjackCost >= 1e6) {
    document.getElementById("lumberjackCost").innerHTML = game.lumberjackCost.toExponential(2);
  } else {
    document.getElementById("lumberjackCost").innerHTML = game.lumberjackCost.toFixed(1);
  }
  document.getElementById("miners").innerHTML = game.miners;
  if (game.minerCost >= 1e6) {
    document.getElementById("minerCost").innerHTML = game.minerCost.toExponential(2);
  } else {
    document.getElementById("minerCost").innerHTML = game.minerCost.toFixed(1);
  }
  document.getElementById("hunters").innerHTML = game.hunters;
  if (game.hunterCost >= 1e6) {
    document.getElementById("hunterCost").innerHTML = game.hunterCost.toExponential(2);
  } else {
    document.getElementById("hunterCost").innerHTML = game.hunterCost.toFixed(1);
  }

  document.getElementById("forests").innerHTML = game.forests;
  document.getElementById("forestCost").innerHTML = game.forestCost.toExponential(2);
  document.getElementById("quarries").innerHTML = game.quarries;
  document.getElementById("quarryCost").innerHTML = game.quarryCost.toExponential(2);
  document.getElementById("farms").innerHTML = game.farms;
  document.getElementById("farmCost").innerHTML = game.farmCost.toExponential(2);

  document.getElementById("presNum").innerHTML = game.prestigeWTBC;
  document.getElementById("presCurrent").innerHTML = game.prestigeBanked;

  if (game.prestigeBanked >= 25) {
    document.getElementById("researchbtn").style.display = "inline-block"
  }

  if (game.prestigeBanked >= 100) {
    document.getElementById("relocatebtn").style.display = "inline-block"
  }
}

if (savegame !== null) {

    if (typeof savegame.wood !== "undefined") game.wood = savegame.wood;
    if (typeof savegame.stone !== "undefined") game.stone = savegame.stone; //Check to not load corrupt save
    if (typeof savegame.food !== "undefined") game.food = savegame.food;

    if (typeof savegame.woodtot !== "undefined") game.woodtot = savegame.woodtot;
    if (typeof savegame.stonetot !== "undefined") game.stonetot = savegame.stonetot; //Check to not load corrupt save
    if (typeof savegame.foodtot !== "undefined") game.foodtot = savegame.foodtot;

    if (typeof savegame.axes !== "undefined") game.axes = savegame.axes;
    if (typeof savegame.axeCost !== "undefined") game.axeCost = savegame.axeCost;
    if (typeof savegame.pickaxes !== "undefined") game.pickaxes = savegame.pickaxes;
    if (typeof savegame.pickaxeCost !== "undefined") game.pickaxeCost = savegame.pickaxeCost;
    if (typeof savegame.spears !== "undefined") game.spears = savegame.spears;
    if (typeof savegame.spearCost !== "undefined") game.spearCost = savegame.spearCost;

    if (typeof savegame.lumberjacks !== "undefined") game.lumberjacks = savegame.lumberjacks;
    if (typeof savegame.lumberjackCost !== "undefined") game.lumberjackCost = savegame.lumberjackCost;
    if (typeof savegame.miners !== "undefined") game.miners = savegame.miners;
    if (typeof savegame.minerCost !== "undefined") game.minerCost = savegame.minerCost;
    if (typeof savegame.hunters !== "undefined") game.hunters = savegame.hunters;
    if (typeof savegame.hunterCost !== "undefined") game.hunterCost = savegame.hunterCost;

    if (typeof savegame.forests !== "undefined") game.forests = savegame.forests;
    if (typeof savegame.forestCost !== "undefined") game.forestCost = savegame.forestCost;
    if (typeof savegame.quarries !== "undefined") game.quarries = savegame.quarries;
    if (typeof savegame.quarryCost !== "undefined") game.quarryCost = savegame.quarryCost;
    if (typeof savegame.farms !== "undefined") game.farms = savegame.farms;
    if (typeof savegame.farmCost !== "undefined") game.farmCost = savegame.farmCost;

    if (typeof savegame.prestigeWTBC !== "undefined") game.prestigeWTBC = savegame.prestigeWTBC;
    if (typeof savegame.prestigeBanked !== "undefined") game.prestigeBanked = savegame.prestigeBanked;
    if (typeof savegame.mForPres !== "undefined") game.mForPres = savegame.mForPres;

    if (typeof savegame.research !== "undefined") game.research = savegame.research;

    if (typeof savegame.researchproj1 !== "undefined") game.researchproj1 = savegame.researchproj1;
    if (typeof savegame.researchproj2 !== "undefined") game.researchproj2 = savegame.researchproj2;

    if (typeof savegame.relocate1 !== "undefined") game.relocate1 = savegame.relocate1;

}

function woodClick(x) { //Increase Wood. If you put woodClick(15) into the console, it would increase wood by 15.
    game.wood += (x * game.prestigeBanked);
    game.woodtot += (x * game.prestigeBanked);
    updateScreen()
}

function stoneClick(x) {
    game.stone += (x * game.prestigeBanked);
    game.stonetot += (x * game.prestigeBanked);
    updateScreen()
}

function foodClick(x) {
    game.food += (x * game.prestigeBanked);
    game.foodtot += (x * game.prestigeBanked);
    updateScreen()
}

function metalClick(x) {
    game.metal += (x * game.prestigeBanked);
    updateScreen()
}

function buyAxe(){  //The purchase functions...
    if(game.wood >= game.axeCost && game.stone >= game.axeCost && game.food >= game.axeCost){ //Checking to make sure requirements are met for purchase
        game.wood -= game.axeCost; //Subtracting resources
        game.stone -= game.axeCost;
        game.food -= game.axeCost;
        game.axeCost = roundNum(game.axeCost, 1)
        game.axeCost = game.axeCost * 1.15 //Increasing price
        game.axes += 1; //Increasing amout per second
        game.axeCost = roundNum(game.axeCost, 1) //Round the cost
        roundR() //Round the resources
        updateScreen()
    }
}

function buyPickaxe(){
    if(game.wood >= game.pickaxeCost && game.stone >= game.pickaxeCost && game.food >= game.pickaxeCost){
        game.wood -= game.pickaxeCost;
        game.stone -= game.pickaxeCost;
        game.food -= game.pickaxeCost;
        game.pickaxeCost = game.pickaxeCost * 1.15;
        game.pickaxes += 1;
        game.pickaxeCost = roundNum(game.pickaxeCost, 1)
        roundR()
        updateScreen()
    }
}

function buySpear(){
    if(game.wood >= game.spearCost && game.stone >= game.spearCost && game.food >= game.spearCost){
        game.wood -= game.spearCost;
        game.stone -= game.spearCost;
        game.food -= game.spearCost;
        game.spearCost = game.spearCost * 1.15;
        game.spears += 1;
        game.spearCost = roundNum(game.spearCost, 1)
        roundR()
        updateScreen()
    }
}

function buyLumberjack(){
    if(game.stone >= game.lumberjackCost && game.food >= game.lumberjackCost){
        game.stone -= game.lumberjackCost;
        game.food -= game.lumberjackCost;
        game.lumberjackCost = game.lumberjackCost * 1.15;
        game.lumberjacks += 1;
        game.lumberjackCost = roundNum(game.lumberjackCost, 1)
        roundR()
        updateScreen()
    }
}

function buyMiner(){
    if(game.wood >= game.minerCost && game.food >= game.minerCost){
        game.wood -= game.minerCost;
        game.food -= game.minerCost;
        game.minerCost = game.minerCost * 1.15;
        game.miners += 1;
        game.minerCost = roundNum(game.minerCost, 1)
        roundR()
        updateScreen()
    }
}

function buyHunter(){
    if(game.wood >= game.hunterCost && game.stone >= game.hunterCost){
        game.wood -= game.hunterCost;
        game.stone -= game.hunterCost;
        game.hunterCost = game.hunterCost * 1.15;
        game.hunters += 1;
        game.hunterCost = roundNum(game.hunterCost, 1)
        roundR()
        updateScreen()
    }
}

function buyForest(){
    if(game.wood >= game.forestCost && game.food >= game.forestCost){
        game.wood -= game.forestCost;
        game.food -= game.forestCost;
        game.forestCost = game.forestCost * 1.15;
        game.forests += 1;
        game.forestCost = roundNum(game.forestCost, 1)
        roundR()
        updateScreen()
    }
}

function buyQuarry(){
    if(game.stone >= game.quarryCost && game.food >= game.quarryCost){
        game.stone -= game.quarryCost;
        game.food -= game.quarryCost;
        game.quarryCost = game.quarryCost * 1.15;
        game.quarries += 1;
        game.quarryCost = roundNum(game.quarryCost, 1)
        roundR()
        updateScreen()
    }
}

function buyFarm(){
    if(game.wood >= game.farmCost && game.food >= game.farmCost){
        game.wood -= game.farmCost;
        game.food -= game.farmCost;
        game.farmCost = game.farmCost * 1.15;
        game.farms += 1;
        game.farmCost = roundNum(game.farmCost, 1)
        roundR()
        updateScreen()
    }
}

function buyAxe10() {
  if (game.wood >= (game.axeCost * 23.3) && game.stone >= (game.axeCost * 23.3) && game.food >= (game.axeCost * 23.3)) {
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    buyAxe()
    updateScreen()
  }
}

function buyPickaxe10() {
  if (game.wood >= (game.pickaxeCost * 23.3) && game.stone >= (game.pickaxeCost * 23.3) && game.food >= (game.pickaxeCost * 23.3)) {
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    buyPickaxe()
    updateScreen()
  }
}

function buySpear10() {
  if (game.wood >= (game.spearCost * 23.3) && game.stone >= (game.spearCost * 23.3) && game.food >= (game.spearCost * 23.3)) {
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    buySpear()
    updateScreen()
  }
}

function buyLumberjack10() {
  if (game.wood >= (game.lumberjackCost * 23.3) && game.stone >= (game.lumberjackCost * 23.3) && game.food >= (game.lumberjackCost * 23.3)) {
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    buyLumberjack()
    updateScreen()
  }
}

function buyMiner10() {
  if (game.wood >= (game.minerCost * 23.3) && game.stone >= (game.minerCost * 23.3) && game.food >= (game.minerCost * 23.3)) {
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    buyMiner()
    updateScreen()
  }
}

function buyHunter10() {
  if (game.wood >= (game.hunterCost * 23.3) && game.stone >= (game.hunterCost * 23.3) && game.food >= (game.hunterCost * 23.3)) {
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    buyHunter()
    updateScreen()
  }
}

function buyForest10() {
  if (game.wood >= (game.forestCost * 23.3) && game.stone >= (game.forestCost * 23.3) && game.food >= (game.forestCost * 23.3)) {
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    buyForest()
    updateScreen()
  }
}

function buyQuarry10() {
  if (game.wood >= (game.quarryCost * 23.3) && game.stone >= (game.quarryCost * 23.3) && game.food >= (game.quarryCost * 23.3)) {
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    buyQuarry()
    updateScreen()
  }
}

function buyFarm10() {
  if (game.wood >= (game.farmCost * 23.3) && game.stone >= (game.farmCost * 23.3) && game.food >= (game.farmCost * 23.3)) {
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    buyFarm()
    updateScreen()
  }
}

function proj1() {
  if (game.research >= 1) {
    game.research -= 1;
    game.researchproj1 = true;
    document.getElementById("researchamt").innerHTML = game.research;
    document.getElementById("researchproj1").style.display = "none";
    document.getElementById("researchproj2").style.display = "inline-block";
  }
}

function proj2() {
  if (game.research >= 10) {
    game.research -= 10;
    game.researchproj2 = true;
    document.getElementById("researchamt").innerHTML = game.research;
    document.getElementById("researchproj1").style.display = "none";
    document.getElementById("researchproj2").style.display = "none";
  }
}

function roundR() {
  game.wood = roundNum(game.wood, 1)
  game.stone = roundNum(game.stone, 1)
  game.food = roundNum(game.food, 1)
  game.metal = roundNum(game.metal, 1)
}

function menu1() {
  document.getElementById("resources").style.display = "inline-block";
  document.getElementById("research").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
  if (game.researchproj1 == true) {
    document.getElementById("tier2").style.display = "inline-block";
  }

  if (game.researchproj2 == true) {
    document.getElementById("tier3").style.display = "inline-block";
  }
}

function menu2() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("research").style.display = "inline-block";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";

  if (game.researchproj1 == true) {
    if (game.researchproj2 == true) {
      document.getElementById("researchproj1").style.display = "none";
      document.getElementById("researchproj2").style.display = "none";
    } else {
      document.getElementById("researchproj1").style.display = "none";
      document.getElementById("researchproj2").style.display = "inline-block";
    }
  } else {
  document.getElementById("researchproj1").style.display = "inline-block";
  document.getElementById("researchproj2").style.display = "none";
  }
}

function menu3() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("prestige").style.display = "inline-block";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
}

function menu4() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("relocate").style.display = "inline-block";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
  if (game.relocation1) {
    document.getElementById("relocate1").style.display = "none";
    document.getElementById("relocate2").style.display = "inline-block";
  } else {
    document.getElementById("relocate1").style.display = "inline-block";
    document.getElementById("relocate2").style.display = "none";
  }
}

function menu5() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("help").style.display = "inline-block";
  document.getElementById("options").style.display = "none";
}

function menu6() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("options").style.display = "inline-block";
}

function save() { //This function saves the game!
    localStorage.setItem('save', JSON.stringify(game)); //Turning it into a string, & adding to localStorage.
}

function reset() { //Resets progress.
  game.wood = 30;
  game.stone = 30;              //Currency
  game.food = 30;

  game.woodtot = 0;
  game.stonetot = 0;              //Currency Trackers
  game.foodtot = 0;

  game.metal = 30;             //Alt-Currency

  game.research = 0;

  game.researchproj1 = false;  //Stuff
  game.researchproj2 = false;

  game.axes = 0;
  game.axeCost = 1e1;
  game.pickaxes = 0;           //Tier 1
  game.pickaxeCost = 1e1;
  game.spears = 0;
  game.spearCost = 1e1;

  game.lumberjacks = 0;
  game.lumberjackCost = 1e4;
  game.miners = 0;             //Tier 2
  game.minerCost = 1e4;
  game.hunters = 0;
  game.hunterCost = 1e4;

  game.forests = 0;
  game.forestCost = 1e7;
  game.quarries = 0;             //Tier 3
  game.quarryCost = 1e7;
  game.farms = 0;
  game.farmCost = 1e7;

  game.prestigeWTBC = 0;
  game.prestigeBanked = 1;      //Prestige
  game.mForPres = 1e3;

  game.timeSinceAutoSave = 0;   //Other
  game.relocation1 = false;

    save();
    window.location.reload();
}

function prestige() { //Prestige function.
    game.prestigeBanked += game.prestigeWTBC; //Get your multiplier!

    game.prestigeWTBC = 0.000; //So you can't get it again

    game.wood = 30;
    game.stone = 30;              //Currency
    game.food = 30;

    game.woodtot = 0;
    game.stonetot = 0;              //Currency Trackers
    game.foodtot = 0;

    game.metal = 30;

    game.axes = 0;
    game.axeCost = 10;
    game.pickaxes = 0;           //Tier 1
    game.pickaxeCost = 10;
    game.spears = 0;
    game.spearCost = 10;

    game.lumberjacks = 0;
    game.lumberjackCost = 1e4;
    game.miners = 0;             //Tier 2
    game.minerCost = 1e4;
    game.hunters = 0;
    game.hunterCost = 1e4;

    game.forests = 0;
    game.forestCost = 1e7;
    game.quarries = 0;             //Tier 3
    game.quarryCost = 1e7;
    game.farms = 0;
    game.farmCost = 1e7;

    updateScreen()
}

function relocate1() {
  if (game.prestigeBanked >= 251) {
    game.prestigeBanked -= 250

    game.wood = 30;
    game.stone = 30;              //Currency
    game.food = 30;

    game.metal = 30;

    game.axes = 0;
    game.axeCost = 10;
    game.pickaxes = 0;           //Tier 1
    game.pickaxeCost = 10;
    game.spears = 0;
    game.spearCost = 10;

    game.lumberjacks = 0;
    game.lumberjackCost = 1e4;
    game.miners = 0;             //Tier 2
    game.minerCost = 1e4;
    game.hunters = 0;
    game.hunterCost = 1e4;

    game.forests = 0;
    game.forestCost = 1e7;
    game.quarries = 0;             //Tier 3
    game.quarryCost = 1e7;
    game.farms = 0;
    game.farmCost = 1e7;

    game.relocation1 = true;

    updateScreen()

    document.getElementById("metalimg").style.visibility = "visible";
    document.getElementById("metal").style.display = "inline-block";
    document.getElementById("relocate1").style.display = "none";
    document.getElementById("relocate2").style.display = "inline-block";
  }
}

function researchtrade() {
  if (game.prestigeBanked > 10) {
    game.prestigeBanked -= 10;
    game.research += 1;
    document.getElementById("researchamt").innerHTML = game.research;
  }
}

function cheat(x) { //For development purposes, Feel free to use while bored
    game.wood = x * 1e100;
    game.stone = x * 1e100;
    game.food = x * 1e100;
    game.prestigeBanked = x * 1e100;
}

function roundNum(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

window.setInterval(function(){ //The Auto-Stuff
    woodClick((game.axes + (game.lumberjacks * 10) + (game.forests * 100) * game.prestigeBanked) / 5); //Increases wood.
    stoneClick((game.pickaxes + (game.miners * 10) + (game.quarries * 100)* game.prestigeBanked) / 5);
    foodClick((game.spears + (game.hunters * 10) + (game.farms * 100) * game.prestigeBanked) / 5);
    if(game.axes == 0) {
      game.wood += 0.1;
    }
    if(game.pickaxes == 0) {
      game.stone += 0.1;
    }
    if(game.spears == 0) {
      game.food += 0.1;
    }
    metalClick((game.pickaxes + (game.miners * 10) + (game.quarries * 100)* game.prestigeBanked) / 20);
    roundR()
    if (game.woodtot >= game.mForPres && game.stonetot >= game.mForPres && game.foodtot >= game.mForPres) {
      game.prestigeWTBC += 1;
      game.woodtot = 0;
      game.stonetot = 0;
      game.foodtot = 0;
      game.mForPres = game.mForPres * 1.01;
    }
    if ((game.woodtot * 10) >= (game.mForPres * 11) && (game.stonetot * 10) >= (game.mForPres * 11) && (game.foodtot) * 10 >= (game.mForPres) * 11) {
      game.prestigeWTBC += 10;
      game.woodtot = 0;
      game.stonetot = 0;
      game.foodtot = 0;
      game.mForPres = game.mForPres * 1.1;
    }
    game.timeSinceAutoSave += 0.2; //For Auto-Save. (Is broken)
    if (game.timeSinceAutoSave >= 15.0) {
        save(); //Call the save function.
        game.timeSinceAutoSave = 0.0 //Restart the Auto-Save cycle.
    }
    updateScreen()
}, 200);
