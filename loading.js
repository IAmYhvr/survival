if (savegame !== null) {
  if (savegame.version == 0.2) {
    game = savegame
  } else {
  if (typeof savegame.wood !== "undefined") game.wood = savegame.wood;
  if (typeof savegame.stone !== "undefined") game.stone = savegame.stone; //Check to not load corrupt save
  if (typeof savegame.food !== "undefined") game.food = savegame.food;

  if (typeof savegame.metal !== "undefined") game.metal = savegame.metal;

  if (typeof savegame.woodtot !== "undefined") game.woodtot = savegame.woodtot;
  if (typeof savegame.stonetot !== "undefined") game.stonetot = savegame.stonetot;
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

  if (typeof savegame.relocations !== "undefined") game.relocations = savegame.relocations;
}
}

updateScreen()
changeMenu("resources")
