var savegame = JSON.parse(localStorage.getItem("survivalsave")); //Parse the save in localStorage

var game = {
  items: {
    wood: 0,
    stone: 0,
    food: 0,
  },
  buildings: {
    t1: {
      w: {
        cost: 10,
        amount: 1
      },
      s: {
        cost: 10,
        amount: 1
      },
      f: {
        cost: 10,
        amount: 1
      }
    },
    t2: {
      w: {
        cost: 1000,
        amount: 0
      },
      s: {
        cost: 1000,
        amount: 0
      },
      f: {
        cost: 1000,
        amount: 0
      }
    },
    t3: {
      w: {
        cost: 100000,
        amount: 0
      },
      s: {
        cost: 100000,
        amount: 0
      },
      f: {
        cost: 100000,
        amount: 0
      }
    }
  },
  prestige: {
    claimed: 0,
    unclaimed: 0,
    untilUnclaimed: 5000,
    untilUnclaimedStartingAmount: 5000
  },
  research: {
    amount: 0,
    upgrades: []
  },
  multipliers: {
    t1: 1,
    t2: 1,
    t3: 1
  },
  options: {
    theme: "Light",
    version: "0.3.1",
    lastTick: Date.now()
  }
}

var update = {
  amounts: function() {
    updateItem("", game.items.wood, "wood")
    updateItem("", game.items.stone, "stone")
    updateItem("", game.items.food, "food")
  },
  buyButtons: function() {
    updateItem("", game.buildings.t1.w.amount, "1w")
    updateItem("", game.buildings.t1.w.cost, "1wc")
    updateItem("", game.buildings.t1.s.amount, "1s")
    updateItem("", game.buildings.t1.s.cost, "1sc")
    updateItem("", game.buildings.t1.f.amount, "1f")
    updateItem("", game.buildings.t1.f.cost, "1fc")
    updateItem("", game.buildings.t1.w.cost * 23.3, "1w10c")
    updateItem("", game.buildings.t1.s.cost * 23.3, "1s10c")
    updateItem("", game.buildings.t1.f.cost * 23.3, "1f10c")
    updateItem("", game.buildings.t2.w.amount, "2w")
    updateItem("", game.buildings.t2.w.cost, "2wc")
    updateItem("", game.buildings.t2.s.amount, "2s")
    updateItem("", game.buildings.t2.s.cost, "2sc")
    updateItem("", game.buildings.t2.f.amount, "2f")
    updateItem("", game.buildings.t2.f.cost, "2fc")
    updateItem("", game.buildings.t2.w.cost * 23.3, "2w10c")
    updateItem("", game.buildings.t2.s.cost * 23.3, "2s10c")
    updateItem("", game.buildings.t2.f.cost * 23.3, "2f10c")
    updateItem("", game.buildings.t3.w.amount, "3w")
    updateItem("", game.buildings.t3.w.cost, "3wc")
    updateItem("", game.buildings.t3.s.amount, "3s")
    updateItem("", game.buildings.t3.s.cost, "3sc")
    updateItem("", game.buildings.t3.f.amount, "3f")
    updateItem("", game.buildings.t3.f.cost, "3fc")
    updateItem("", game.buildings.t3.w.cost * 23.3, "3w10c")
    updateItem("", game.buildings.t3.s.cost * 23.3, "3s10c")
    updateItem("", game.buildings.t3.f.cost * 23.3, "3f10c")
  },
  prestige: function() {
    updateItem("", game.prestige.untilUnclaimed, "rescourcesUntilUnclaimed")
    updateItem("", game.prestige.unclaimed, "presNum")
    updateItem("", game.prestige.claimed, "presCurrent")
  },
  research: function() {
    updateItem("", game.research.amount, "researchamt")
  },
  options: function() {
    document.getElementById("currentTheme").innerHTML = "Currently: " + game.options.theme
    document.getElementById("theme").href = "themes/" + game.options.theme + ".css"
  },
  all: function() {
    update.amounts()
    update.buyButtons()
    update.prestige()
    update.research()
    update.options()
  }
}

var reset = {
  items: function() {
    game.items.wood = 0
    game.items.stone = 0
    game.items.food = 0
  },
  buildings: function() {
    game.buildings.t1.w.amount = 1
    game.buildings.t1.s.amount = 1
    game.buildings.t1.f.amount = 1
    game.buildings.t2.w.amount = 0
    game.buildings.t2.s.amount = 0
    game.buildings.t2.f.amount = 0
    game.buildings.t3.w.amount = 0
    game.buildings.t3.s.amount = 0
    game.buildings.t3.f.amount = 0
    game.buildings.t1.w.cost = 10
    game.buildings.t1.s.cost = 10
    game.buildings.t1.f.cost = 10
    game.buildings.t2.w.cost = 1000
    game.buildings.t2.s.cost = 1000
    game.buildings.t2.f.cost = 1000
    game.buildings.t3.w.cost = 100000
    game.buildings.t3.s.cost = 100000
    game.buildings.t3.f.cost = 100000
  },
  forHardReset: function() {
    game.prestige.claimed = 0;
    game.prestige.unclaimed = 0;
    game.prestige.untilUnclaimed = 5000;
    game.prestige.untilUnclaimedStartingAmount = 5000;
    game.research.amount = 0;
    for (var i = 1; i <= 3; i++) {
      game.multipliers["t" + i] = 1
    }
  }
}

function updateItem(extraText, item, id) {
  document.getElementById(id).innerHTML = extraText + format(item, "Engineering");
}

function buyItem(tier, type) {
  if (game.buildings["t" + tier][type].cost <= game.items.wood && game.buildings["t" + tier][type].cost <= game.items.food && game.buildings["t" + tier][type].cost <= game.items.food) {
    game.buildings["t" + tier][type].amount += 1;
    game.items.wood -= game.buildings["t" + tier][type].cost
    game.items.stone -= game.buildings["t" + tier][type].cost
    game.items.food -= game.buildings["t" + tier][type].cost
    game.buildings["t" + tier][type].cost *= 1.15
    update.buyButtons()
  }
}

function buy10Item(tier, type) {
  if (game.buildings["t" + tier][type].cost * 23.3 <= game.items.wood && game.buildings["t" + tier][type].cost * 23.3 <= game.items.food && game.buildings["t" + tier][type].cost * 23.3 <= game.items.food) {
    game.buildings["t" + tier][type].amount += 10;
    game.items.wood -= game.buildings["t" + tier][type].cost * 23.3
    game.items.stone -= game.buildings["t" + tier][type].cost * 23.3
    game.items.food -= game.buildings["t" + tier][type].cost * 23.3
    for (var i = 0; i < 10; i++) {
      game.buildings["t" + tier][type].cost *= 1.15
    }
    /* ^ Too lazy to math */
    update.buyButtons()
  }
}

/*
  23.3 - The Magic Number
*/

function changeMenu(menu) {
  document.getElementById("resources").style.display = "none";
  document.getElementById("research").style.display = "none";
  document.getElementById("prestige").style.display = "none";
  document.getElementById("help").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById(menu).style.display = "inline-block";
}

function calcGains(type) {
  var diff = (Date.now() - game.options.lastTick) / 200
  return(((game.buildings.t1[type].amount * game.multipliers.t1 * (game.prestige.claimed + 1)) + (game.buildings.t2[type].amount * 10 * game.multipliers.t1 * (game.prestige.claimed + 1)) + (game.buildings.t3[type].amount * 100 * game.multipliers.t1 * (game.prestige.claimed + 1))) * diff)
}

/* Options */

function theme() {
  if (game.options.theme == "Light") {
    game.options.theme = "Normal"
  } else if (game.options.theme == "Normal") {
    game.options.theme = "Light"
  }
  update.options()
}

/* fin */

function save() { //This function saves the game!
    localStorage.setItem('survivalsave', JSON.stringify(game)); //Turning it into a string, & adding to localStorage.
}

function resetGame() {
  if (confirm("Are you sure? No going back!")) {
    reset.items()
    reset.buildings()
    reset.forHardReset()

    save();
    window.location.reload();
  }
}

function prestige() { //Prestige function.
    game.prestige.claimed += game.prestige.unclaimed
    game.prestige.untilUnclaimedStartingAmount = 5000
    game.prestige.untilUnclaimed = 5000
    game.prestige.unclaimed = 0
    reset.items()
    reset.buildings()
    update.all()
}

update.all()

var mainGameLoop = window.setInterval(function() {
  game.items.wood += calcGains("w") / 5
  game.items.stone += calcGains("s") / 5
  game.items.food += calcGains("f") / 5
  game.prestige.untilUnclaimed -= calcGains("w") / 5
  game.prestige.untilUnclaimed -= calcGains("s") / 5
  game.prestige.untilUnclaimed -= calcGains("f") / 5
  game.options.lastTick = Date.now()
  while (game.prestige.untilUnclaimed <= 0) {
    game.prestige.unclaimed += 1
    game.prestige.untilUnclaimedStartingAmount *= 1.25
    game.prestige.untilUnclaimed += game.prestige.untilUnclaimedStartingAmount
  }
  update.amounts()
  update.prestige()
}, 200)

var saveLoop = window.setInterval(function() {
  save()
}, 15000)
