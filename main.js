var savegame = JSON.parse(localStorage.getItem("save")); //Parse the save in localStorage

var game = {
  wood: 0,
  stone: 0,              //Currency
  food: 0,

  woodtot: 0,            //Currency Trackers
  stonetot: 0,
  foodtot: 0,

  metal: 0,             //Alt-Currency

  research: 0,

  researchproj1: false,  //Stuff
  researchproj2: false,

  axes: 1,
  axeCost: 1e1,
  pickaxes: 1,           //Tier 1
  pickaxeCost: 1e1,
  spears: 1,
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
  relocations: 0,
  lastResearchProject: 0,

  tier1mult: 1,
  tier2mult: 1,
  tier3mult: 1,

  version: 0.2
}

var update = {
  updateAmounts: function() {
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
      document.getElementById("metal").innerHTML = game.metal.toExponential(2);
    } else {
      document.getElementById("metal").innerHTML = game.metal.toFixed(1);
    }
  },
  updateTier1: function() {
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
    /* DIVIDER */
    storage = game.axeCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10AxesCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10AxesCost").innerHTML = storage.toFixed(1);
    }
    storage = game.pickaxeCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10PickaxesCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10PickaxesCost").innerHTML = storage.toFixed(1);
    }
    storage = game.spearCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10SpearsCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10SpearsCost").innerHTML = storage.toFixed(1);
    }
  },
  updateTier2: function() {
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
    /* DIVIDER */
    storage = game.lumberjackCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10LumberjacksCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10LumberjacksCost").innerHTML = storage.toFixed(1);
    }
    storage = game.minerCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10MinersCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10MinersCost").innerHTML = storage.toFixed(1);
    }
    storage = game.hunterCost * 23.3;
    if (storage >= 1e6) {
      document.getElementById("buy10HuntersCost").innerHTML = storage.toExponential(2);
    } else {
      document.getElementById("buy10HuntersCost").innerHTML = storage.toFixed(1);
    }
  },
  updateTier3: function() {
    document.getElementById("forests").innerHTML = game.forests;
    document.getElementById("forestCost").innerHTML = game.forestCost.toExponential(2);
    document.getElementById("quarries").innerHTML = game.quarries;
    document.getElementById("quarryCost").innerHTML = game.quarryCost.toExponential(2);
    document.getElementById("farms").innerHTML = game.farms;
    document.getElementById("farmCost").innerHTML = game.farmCost.toExponential(2);
    /* DIVIDER */
    storage = game.forestCost * 23.3;
    document.getElementById("buy10ForestsCost").innerHTML = storage.toExponential(2);
    storage = game.quarryCost * 23.3;
    document.getElementById("buy10QuarriesCost").innerHTML = storage.toExponential(2);
    storage = game.farmCost * 23.3;
    document.getElementById("buy10FarmsCost").innerHTML = storage.toExponential(2);
  },
  updatePrestige: function() {
    document.getElementById("presNum").innerHTML = game.prestigeWTBC;
    document.getElementById("presCurrent").innerHTML = game.prestigeBanked;
    document.getElementById("woodUntilPP").innerHTML = (game.mForPres - game.woodtot).toFixed(1)
    document.getElementById("stoneUntilPP").innerHTML = (game.mForPres - game.stonetot).toFixed(1)
    document.getElementById("foodUntilPP").innerHTML = (game.mForPres - game.foodtot).toFixed(1)
  },
  updateTabs: function() {
    if (game.prestigeBanked >= 15) {
      document.getElementById("researchbtn").style.display = "inline-block";
    }
    if (game.prestigeBanked >= 150) {
      document.getElementById("relocatebtn").style.display = "inline-block";
    }
  }
}

var messageToViewer = "I would put some easter egg here, but to be honest, Thereare enough already."

function updateScreen() {
  update.updateAmounts()
  update.updatePrestige()
  update.updateTabs()
  update.updateTier1()
  update.updateTier2()
  update.updateTier3()
}

var storage = 0;

function woodClick(x) { //Increase Wood. If you put woodClick(15) into the console, it would increase wood by 15.
    game.wood += (x * game.prestigeBanked);
    game.woodtot += (x * game.prestigeBanked);
    update.updateAmounts()
}

function stoneClick(x) {
    game.stone += (x * game.prestigeBanked);
    game.stonetot += (x * game.prestigeBanked);
    update.updateAmounts()
}

function foodClick(x) {
    game.food += (x * game.prestigeBanked);
    game.foodtot += (x * game.prestigeBanked);
    update.updateAmounts()
}

function metalClick(x) {
    game.metal += (x * game.prestigeBanked);
    update.updateAmounts()
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
        update.updateTier1()
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
        update.updateTier1()
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
        update.updateTier1()
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
        update.updateTier2()
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
        update.updateTier2()
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
        update.updateTier2()
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
        update.updateTier3()
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
        update.updateTier3()
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
        update.updateTier3()
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
  }
}

function roundR() {
  game.wood = roundNum(game.wood, 1)
  game.stone = roundNum(game.stone, 1)
  game.food = roundNum(game.food, 1)
  game.metal = roundNum(game.metal, 1)
  update.updateAmounts()
}

function changeMenu(menu) {
  document.getElementById("resources").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("relocate").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById(menu).style.display = "inline-block";
  if (menu == "resources") {
    if (game.researchproj1 == true) {
      document.getElementById("tier2").style.display = "inline-block";
    }

    if (game.researchproj2 == true) {
      document.getElementById("tier3").style.display = "inline-block";
    }
  } else if (menu == "research") {
    researchToDisplay()
  }
}

function save() { //This function saves the game!
    localStorage.setItem('save', JSON.stringify(game)); //Turning it into a string, & adding to localStorage.
}

function reset(x) { //Resets progress.
  if (confirm("Are you sure? No going back!")) {
    game.wood = 0;
    game.stone = 0;              //Currency
    game.food = 0;

    game.woodtot = 0;
    game.stonetot = 0;          //Currency Trackers
    game.foodtot = 0;

    game.metal = 0;             //Alt-Currency

    game.research = 0;

    game.researchproj1 = false;  //Stuff
    game.researchproj2 = false;

    game.axes = 1;
    game.axeCost = 1e1;
    game.pickaxes = 1;           //Tier 1
    game.pickaxeCost = 1e1;
    game.spears = 1;
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

    game.tier1mult = 1;
    game.tier2mult = 1;
    game.tier3mult = 1;

    save();
    window.location.reload();
  }
}

function prestige() { //Prestige function.
    game.prestigeBanked += game.prestigeWTBC; //Get your multiplier!

    game.prestigeWTBC = 0.000; //So you can't get it again

    game.wood = 0;
    game.stone = 0;              //Currency
    game.food = 0;

    game.woodtot = 0;
    game.stonetot = 0;              //Currency Trackers
    game.foodtot = 0;

    game.metal = 0;

    game.axes = 1;
    game.axeCost = 10;
    game.pickaxes = 1;          //Tier 1
    game.pickaxeCost = 10;
    game.spears = 1;
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
    woodClick(((game.axes * game.tier1mult) + (game.lumberjacks * 10 * game.tier2mult) + (game.forests * 100 * game.tier3mult) * game.prestigeBanked) / 5); //Increases wood.
    stoneClick(((game.pickaxes * game.tier1mult) + (game.miners * 10 * game.tier2mult) + (game.quarries * 100 * game.tier3mult)* game.prestigeBanked) / 5);
    foodClick(((game.spears * game.tier1mult) + (game.hunters * 10 * game.tier2mult) + (game.farms * 100 * game.tier3mult) * game.prestigeBanked) / 5);
    metalClick((game.pickaxes + (game.miners * 10) + (game.quarries * 100)* game.prestigeBanked) / 20);
    roundR()
    if (game.woodtot >= game.mForPres && game.stonetot >= game.mForPres && game.foodtot >= game.mForPres) {
      game.prestigeWTBC += 1;
      game.woodtot -= game.mForPres;
      game.stonetot -= game.mForPres;
      game.foodtot -= game.mForPres;
      game.mForPres = game.mForPres * 1.01;
      update.updatePrestige()
    }
    if ((game.woodtot * 10) >= (game.mForPres * 11) && (game.stonetot * 10) >= (game.mForPres * 11) && (game.foodtot) * 10 >= (game.mForPres) * 11) {
      game.prestigeWTBC += 10;
      game.woodtot -= (game.mForPres * 11);
      game.stonetot -= (game.mForPres * 11);
      game.foodtot -= (game.mForPres * 11);
      game.mForPres = game.mForPres * 1.1;
      update.updatePrestige()
    }
    game.timeSinceAutoSave += 0.2; //For Auto-Save.
    if (game.timeSinceAutoSave >= 15.0) {
      save(); //Call the save function.
      game.timeSinceAutoSave = 0.0 //Restart the Auto-Save cycle.
    }
    update.updatePrestige()
}, 200);
