var savegame = JSON.parse(localStorage.getItem("save")); //Parse the save in localStorage

var wood = 0;
var stone = 0;              //Currency
var food = 0;

var axes = 0;
var axeCost = 10;
var pickaxes = 0;           //Tier 1
var pickaxeCost = 10;
var spears = 0;
var spearCost = 10;

var lumberjacks = 0;
var lumberjackCost = 1000;
var miners = 0;             //Tier 2
var minerCost = 1000;
var hunters = 0;
var hunterCost = 1000;

var forests = 0;
var forestCost = 1000000;
var quarries = 0;             //Tier 3
var quarryCost = 1000000;
var farms = 0;
var farmCost = 1000000;

var prestigeWTBC = 0;
var prestigeBanked = 1;      //Prestige
var presnum = 1.000;

var timeSinceAutoSave = 0;   //Other

function updateScreen() {
  document.getElementById("wood").innerHTML = wood.toExponential(2);
  document.getElementById("stone").innerHTML = stone.toExponential(2);  //Update GUI after load
  document.getElementById("food").innerHTML = food.toExponential(2);    //BTW, the .toExponential(2) makes it so that it shows 1.00e+0

  document.getElementById("axes").innerHTML = axes;
  document.getElementById("axeCost").innerHTML = axeCost;
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
};

if (typeof savegame !== 'null') {

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
  wood += (x * prestigeBanked)
  updateScreen()
};

function stoneClick(x) {
  stone += (x * prestigeBanked)
  updateScreen()
};

function foodClick(x) {
  food += (x * prestigeBanked)
  updateScreen()
};

function buyAxe(){  //The purchase functions...
    if(wood >= axeCost && stone >= axeCost && food >= axeCost){ //Checking to make sure requirements are met for purchase
      wood -= axeCost; //Subtracting rescources
      stone -= axeCost;
      food -= axeCost;
      axeCost += (axes); //Increasing price
      axes += 1; //Increasing amout per second
      prestigeWTBC += 1;  //Prestinge-related
      updateScreen()
    };
};

function buyPickaxe(){
    if(wood >= pickaxeCost && stone >= pickaxeCost && food >= pickaxeCost){
      wood -= pickaxeCost;
      stone -= pickaxeCost;
      food -= pickaxeCost;
      pickaxeCost += (pickaxes);
      pickaxes += 1;
      prestigeWTBC += 1;
      updateScreen()
    };
};

function buySpear(){
    if(wood >= spearCost && stone >= spearCost && food >= spearCost){
      wood -= spearCost;
      stone -= spearCost;
      food -= spearCost;
      spearCost += (spears);
      spears += 1;
      prestigeWTBC += 1;
      updateScreen()
    };
};

function buyLumberjack(){
    if(stone >= lumberjackCost && food >= lumberjackCost){
      stone -= lumberjackCost;
      food -= lumberjackCost;
      lumberjackCost += (lumberjacks * 1000);
      lumberjacks += 1;
      prestigeWTBC += 2;
      updateScreen()
    };
};

function buyMiner(){
    if(wood >= minerCost && food >= minerCost){
      wood -= minerCost;
      food -= minerCost;
      minerCost += (miners * 1000);
      miners += 1;
      prestigeWTBC += 2;
      updateScreen()
    };
};

function buyHunter(){
    if(wood >= hunterCost && stone >= hunterCost){
      wood -= hunterCost;
      stone -= hunterCost;
      food -= hunterCost;
      hunterCost += (hunters * 1000);
      hunters += 1;
      prestigeWTBC += 2;
      updateScreen()
    };
};

function buyForest(){
    if(wood >= forestCost && food >= forestCost){
      wood -= forestCost;
      food -= forestCost;
      forestCost += (lumberjacks * 100000);
      forests += 1;
      prestigeWTBC += 4;
      updateScreen()
    };
};

function buyQuarry(){
    if(stone >= quarryCost && food >= quarryCost){
      stone -= quarryCost;
      food -= quarryCost;
      quarryCost += (quarries * 100000);
      quarries += 1;
      prestigeWTBC += 4;
      updateScreen()
    };
};

function buyFarm(){
    if(wood >= farmCost && food >= farmCost){
      wood -= farmCost;
      food -= farmCost;
      food -= farmCost;
      farmCost += (farms * 100000);
      farms += 1;
      prestigeWTBC += 4;
      updateScreen()
    };
};

function save() { //This function saves the game!
  var save = { //Turn the save into a array, so it can be turned into a string.
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
  }
  localStorage.setItem('save', JSON.stringify(save)); //Turning it into a string, & adding to localStorage.
};

function reset() { //Resets progress.
  wood = 0;
  stone = 0;
  food = 0;

  axes = 0;
  axeCost = 10;
  pickaxes = 0;
  pickaxeCost = 10;
  spears = 0;
  spearCost = 10;

  lumberjacks = 0;
  lumberjackCost = 1000;
  miners = 0;
  minerCost = 1000;
  hunters = 0;
  hunterCost = 1000;

  forests = 0;
  forestCost = 1000000;
  quarries = 0;
  quarryCost = 1000000;
  farms = 0;
  farmCost = 1000000;

  prestigeBanked = 1.000;
  prestigeWTBC = 0.000;

  save()
  updateScreen()
};

function prestige() { //Prestige function.
  prestigeBanked += prestigeWTBC; //Get your multiplier!

  prestigeWTBC = 0.000; //So you can't get it again

  wood = 0;
  stone = 0;
  food = 0;

  axes = 0;
  axeCost = 10;
  pickaxes = 0;
  pickaxeCost = 10;
  spears = 0;
  spearCost = 10;

  lumberjacks = 0;
  lumberjackCost = 1000;
  miners = 0;
  minerCost = 1000;
  hunters = 0;
  hunterCost = 1000;

  forests = 0;
  forestCost = 1000000;
  quarries = 0;
  quarryCost = 1000000;
  farms = 0;
  farmCost = 1000000;

  updateScreen()
}

function cheat(x) { //For development purposes, Feel free to use while bored
  y = x * 1000000000
  wood = y;
  stone = y;
  food = y;
}

window.setInterval(function(){ //The Auto-Magic!
    woodClick((axes + (lumberjacks * 25) + (forests * 1000) * prestigeBanked) / 5) //Increases wood.
    stoneClick((pickaxes + (miners * 25) + (quarries * 1000)* prestigeBanked) / 5)
    foodClick((spears + (hunters * 25) + (farms * 1000) * prestigeBanked) / 5)
    timeSinceAutoSave += 0.2 //For Auto-Save.
    if (timeSinceAutoSave == 15) {
      save() //Call the save function.
      timeSinceAutoSave = 0 //Restart the Auto-Save cycle.
    }
    presnum = ((prestigeWTBC + 1) / prestigeBanked) //Updates the "Prestige to gain a x Multiplier" button
    if (presnum <= 1) {
      presnum = 1
    }
    updateScreen()
}, 200);
