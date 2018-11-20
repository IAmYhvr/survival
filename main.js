var savegame = JSON.parse(localStorage.getItem("save")); //Parse the save in localStorage

var wood = 30;
var stone = 30;              //Currency
var food = 30;

var axes = 0;
var axeCost = 10;
var pickaxes = 0;           //Tier 1
var pickaxeCost = 10;
var spears = 0;
var spearCost = 10;

var lumberjacks = 0;
var lumberjackCost = 1e4;
var miners = 0;             //Tier 2
var minerCost = 1e4;
var hunters = 0;
var hunterCost = 1e4;

var forests = 0;
var forestCost = 1e7;
var quarries = 0;             //Tier 3
var quarryCost = 1e7;
var farms = 0;
var farmCost = 1e7;

var prestigeWTBC = 0;
var prestigeBanked = 1;      //Prestige
var presnum = 1.000;

var timeSinceAutoSave = 0;   //Other

function updateScreen() {
  if (wood >= 1e6) {
    document.getElementById("wood").innerHTML = wood.toExponential(2);
  } else {
    document.getElementById("wood").innerHTML = wood;
  }
  if (stone >= 1e6) {
    document.getElementById("stone").innerHTML = stone.toExponential(2);  //Update GUI after load
  } else {
    document.getElementById("stone").innerHTML = stone;
  }
  if (food >= 1e6) {
    document.getElementById("food").innerHTML = food.toExponential(2);    //BTW, the .toExponential(2) makes it so that it shows 1.00e+0
  } else {
    document.getElementById("food").innerHTML = food;
  }

  document.getElementById("axes").innerHTML = axes;
  if (food >= 1e6) {
    document.getElementById("food").innerHTML = food.toExponential(2);    //BTW, the .toExponential(2) makes it so that it shows 1.00e+0
  } else {
    document.getElementById("food").innerHTML = food;
  }
  document.getElementById("pickaxes").innerHTML = pickaxes;
    document.getElementById("pickaxeCost").innerHTML = pickaxeCost;
  document.getElementById("spears").innerHTML = spears;
    document.getElementById("spearCost").innerHTML = spearCost;

  document.getElementById("lumberjacks").innerHTML = lumberjacks;
    document.getElementById("lumberjackCost").innerHTML = lumberjackCost.toExponential(2);
  document.getElementById("miners").innerHTML = miners;
    document.getElementById("minerCost").innerHTML = minerCost.toExponential(2);
  document.getElementById("hunters").innerHTML = hunters;
    document.getElementById("hunterCost").innerHTML = hunterCost.toExponential(2);

  document.getElementById("forests").innerHTML = forests;
    document.getElementById("forestCost").innerHTML = forestCost.toExponential(2);
  document.getElementById("quarries").innerHTML = quarries;
    document.getElementById("quarryCost").innerHTML = quarryCost.toExponential(2);
  document.getElementById("farms").innerHTML = farms;
    document.getElementById("farmCost").innerHTML = farmCost.toExponential(2);

  document.getElementById("presNum").innerHTML = presnum;
    document.getElementById("presCurrent").innerHTML = prestigeBanked;
}

if (savegame !== null) {

    if (typeof savegame.wood !== "undefined") wood = savegame.wood;
    if (typeof savegame.stone !== "undefined") stone = savegame.stone; //Check to not load corrupt save
    if (typeof savegame.food !== "undefined") food = savegame.food;

    if (typeof savegame.axes !== "undefined") axes = savegame.axes;
    if (typeof savegame.axeCost !== "undefined") axeCost = savegame.axeCost;
    if (typeof savegame.pickaxes !== "undefined") pickaxes = savegame.pickaxes;
    if (typeof savegame.pickaxeCost !== "undefined") pickaxeCost = savegame.pickaxeCost;
    if (typeof savegame.spears !== "undefined") spears = savegame.spears;
    if (typeof savegame.spearCost !== "undefined") spearCost = savegame.spearCost;

    if (typeof savegame.lumberjacks !== "undefined") lumberjacks = savegame.lumberjacks;
    if (typeof savegame.lumberjackCost !== "undefined") lumberjackCost = savegame.lumberjackCost;
    if (typeof savegame.miners !== "undefined") miners = savegame.miners;
    if (typeof savegame.minerCost !== "undefined") minerCost = savegame.minerCost;
    if (typeof savegame.hunters !== "undefined") hunters = savegame.hunters;
    if (typeof savegame.hunterCost !== "undefined") hunterCost = savegame.hunterCost;

    if (typeof savegame.forests !== "undefined") forests = savegame.forests;
    if (typeof savegame.forestCost !== "undefined") forestCost = savegame.forestCost;
    if (typeof savegame.quarries !== "undefined") quarries = savegame.quarries;
    if (typeof savegame.quarryCost !== "undefined") quarryCost = savegame.quarryCost;
    if (typeof savegame.farms !== "undefined") farms = savegame.farms;
    if (typeof savegame.farmCost !== "undefined") farmCost = savegame.farmCost;

    if (typeof savegame.prestigeWTBC !== "undefined") prestigeWTBC = savegame.prestigeWTBC;
    if (typeof savegame.prestigeBanked !== "undefined") prestigeBanked = savegame.prestigeBanked;

}

function woodClick(x) { //Increase Wood. If you put woodClick(15) into the console, it would increase wood by 15.
    wood += (x * prestigeBanked);
    updateScreen()
}

function stoneClick(x) {
    stone += (x * prestigeBanked);
    updateScreen()
}

function foodClick(x) {
    food += (x * prestigeBanked);
    updateScreen()
}

function buyAxe(){  //The purchase functions...
    if(wood >= axeCost && stone >= axeCost && food >= axeCost){ //Checking to make sure requirements are met for purchase
        wood -= axeCost; //Subtracting resources
        stone -= axeCost;
        food -= axeCost;
        axeCost = roundNum(axeCost, 1)
        axeCost = axeCost * 1.15 //Increasing price
        axes += 1; //Increasing amout per second
        prestigeWTBC += 1;  //Prestinge-related
        axeCost = roundNum(axeCost, 1) //Round the cost
        roundR() //Round the resources
        updateScreen()
    }
}

function buyPickaxe(){
    if(wood >= pickaxeCost && stone >= pickaxeCost && food >= pickaxeCost){
        wood -= pickaxeCost;
        stone -= pickaxeCost;
        food -= pickaxeCost;
        pickaxeCost = pickaxeCost * 1.15;
        pickaxes += 1;
        prestigeWTBC += 1;
        pickaxeCost = roundNum(pickaxeCost, 1)
        roundR()
        updateScreen()
    }
}

function buySpear(){
    if(wood >= spearCost && stone >= spearCost && food >= spearCost){
        wood -= spearCost;
        stone -= spearCost;
        food -= spearCost;
        spearCost = spearCost * 1.15;
        spears += 1;
        prestigeWTBC += 1;
        spearCost = roundNum(spearCost, 1)
        roundR()
        updateScreen()
    }
}

function buyLumberjack(){
    if(stone >= lumberjackCost && food >= lumberjackCost){
        stone -= lumberjackCost;
        food -= lumberjackCost;
        lumberjackCost = lumberjackCost * 1.15;
        lumberjacks += 1;
        prestigeWTBC += 5;
        lumberjackCost = roundNum(lumberjackCost, 1)
        roundR()
        updateScreen()
    }
}

function buyMiner(){
    if(wood >= minerCost && food >= minerCost){
        wood -= minerCost;
        food -= minerCost;
        minerCost = minerCost * 1.15;
        miners += 1;
        prestigeWTBC += 5;
        minerCost = roundNum(minerCost, 1)
        roundR()
        updateScreen()
    }
}

function buyHunter(){
    if(wood >= hunterCost && stone >= hunterCost){
        wood -= hunterCost;
        stone -= hunterCost;
        hunterCost = hunterCost * 1.15;
        hunters += 1;
        prestigeWTBC += 5;
        hunterCost = roundNum(hunterCost, 1)
        roundR()
        updateScreen()
    }
}

function buyForest(){
    if(wood >= forestCost && food >= forestCost){
        wood -= forestCost;
        food -= forestCost;
        forestCost = forestCost * 1.15;
        forests += 1;
        prestigeWTBC += 25;
        forestCost = roundNum(forestCost, 1)
        roundR()
        updateScreen()
    }
}

function buyQuarry(){
    if(stone >= quarryCost && food >= quarryCost){
        stone -= quarryCost;
        food -= quarryCost;
        quarryCost = quarryCost * 1.15;
        quarries += 1;
        prestigeWTBC += 25;
        quarryCost = roundNum(quarryCost, 1)
        roundR()
        updateScreen()
    }
}

function buyFarm(){
    if(wood >= farmCost && food >= farmCost){
        wood -= farmCost;
        food -= farmCost;
        farmCost = farmCost * 1.15;
        farms += 1;
        prestigeWTBC += 25;
        farmCost = roundNum(farmCost, 1)
        roundR()
        updateScreen()
    }
}

function buyAxe10() {
  if (wood >= (axeCost * 23.3) && stone >= (axeCost * 23.3) && food >= (axeCost * 23.3)) {
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

function roundR() {
  wood = roundNum(wood, 1)
  stone = roundNum(stone, 1)
  food = roundNum(food, 1)
}

function menu1() {
  document.getElementById("resources").style.display = "inline-block";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
  if (prestigeBanked >= 50) {
    document.getElementById("tier2").style.display = "inline-block";
  }

  if (prestigeBanked >= 250) {
    document.getElementById("tier3").style.display = "inline-block";
  }
}

function menu2() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("prestige").style.display = "inline-block";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
}

function menu3() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("help").style.display = "inline-block";
  document.getElementById("options").style.display = "none";
}

function menu4() {
  document.getElementById("resources").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "inline-block";
}

function save() { //This function saves the game!
    var save = { //Turn the save into a object, so it can be turned into a string.
        wood: wood,
        stone: stone,
        food: food,

        axes: axes,
        axeCost: axeCost,
        pickaxes: pickaxes,
        pickaxeCost: pickaxeCost,
        spears: spears,
        spearCost: spearCost,

        lumberjacks: lumberjacks,
        lumberjackCost: lumberjackCost,
        miners: miners,
        minerCost: minerCost,
        hunters: hunters,
        hunterCost: hunterCost,

        forests: forests,
        forestCost: forestCost,
        quarries: quarries,
        quarryCost: quarryCost,
        farms: farms,
        farmCost: farmCost,

        prestigeWTBC: prestigeWTBC,
        prestigeBanked: prestigeBanked
    };
    localStorage.setItem('save', JSON.stringify(save)); //Turning it into a string, & adding to localStorage.
}

function reset() { //Resets progress.

    wood = 30;
    stone = 30;              //Currency
    food = 30;

    axes = 0;
    axeCost = 10;
    pickaxes = 0;           //Tier 1
    pickaxeCost = 10;
    spears = 0;
    spearCost = 10;

    lumberjacks = 0;
    lumberjackCost = 1e4;
    miners = 0;             //Tier 2
    minerCost = 1e4;
    hunters = 0;
    hunterCost = 1e4;

    forests = 0;
    forestCost = 1e7;
    quarries = 0;             //Tier 3
    quarryCost = 1e7;
    farms = 0;
    farmCost = 1e7;

    prestigeWTBC = 0;
    prestigeBanked = 1;      //Prestige
    presnum = 1.000;

    save();
    updateScreen();
}

function prestige() { //Prestige function.
    prestigeBanked += prestigeWTBC; //Get your multiplier!

    prestigeWTBC = 0.000; //So you can't get it again

    wood = 30;
    stone = 30;              //Currency
    food = 30;

    axes = 0;
    axeCost = 10;
    pickaxes = 0;           //Tier 1
    pickaxeCost = 10;
    spears = 0;
    spearCost = 10;

    lumberjacks = 0;
    lumberjackCost = 1e4;
    miners = 0;             //Tier 2
    minerCost = 1e4;
    hunters = 0;
    hunterCost = 1e4;

    forests = 0;
    forestCost = 1e7;
    quarries = 0;             //Tier 3
    quarryCost = 1e7;
    farms = 0;
    farmCost = 1e7;

    updateScreen()
}

function cheat(x) { //For development purposes, Feel free to use while bored
    wood = x * 1e100;
    stone = x * 1e100;
    food = x * 1e100;
}

function roundNum(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

window.setInterval(function(){ //The Auto-Magic!
    woodClick((axes + (lumberjacks * 10) + (forests * 100) * prestigeBanked) / 5); //Increases wood.
    stoneClick((pickaxes + (miners * 10) + (quarries * 100)* prestigeBanked) / 5);
    foodClick((spears + (hunters * 10) + (farms * 100) * prestigeBanked) / 5);
    roundR()
    timeSinceAutoSave += 0.2; //For Auto-Save. (Is broken)
    if (timeSinceAutoSave === 15.0) {
        save(); //Call the save function.
        timeSinceAutoSave = 0.0 //Restart the Auto-Save cycle.
    }
    presnum = ((prestigeWTBC + 1) / prestigeBanked); //Updates the "Prestige to gain a x Multiplier" button
    presnum = roundNum(presnum, 1)
    if (presnum <= 1) {
        presnum = 1
    }
    updateScreen()
}, 200);
