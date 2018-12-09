function relocate() {
  if (game.prestigeBanked >= 251) {
    game.prestigeBanked -= 250

    game.wood = 0;
    game.stone = 0;              //Currency
    game.food = 0;

    game.metal = 0;

    game.axes = 1;
    game.axeCost = 10;
    game.pickaxes = 1;           //Tier 1
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

    game.relocation1 = true;

    updateScreen()

    document.getElementById("metalimg").style.visibility = "visible";
    document.getElementById("metal").style.display = "inline-block";
    document.getElementById("relocate1").style.display = "none";
    document.getElementById("relocate2").style.display = "inline-block";
  }
}
