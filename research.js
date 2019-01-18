function researchtrade() {
  if (game.prestige.claimed > 5) {
    game.prestige.claimed -= 5;
    game.research.amount += 1;
    update.research()
    update.prestige()
  }
}

function addResearchItem(text, cost, tier, mult, id) {
  if (!game.research.upgrades.includes(id)) $("#research").append("<button onclick='buyResearchItem(" + cost + ", \"" + tier + "\", " + mult + ", \"" + id + "\")' id='" + id + "'><span class='btn-line'>" + text + "</span><span class='btn-line'> Cost: " + cost + " Research Points</span></button>")
}

function buyResearchItem(cost, tier, mult, id) {
  if (game.research.amount >= cost) {
    document.getElementById(id).innerHTML = ""
    document.getElementById(id).outerHTML = ""
    game.multipliers[tier] *= mult
    game.research.amount -= cost;
    game.research.upgrades.push(id)
  }
  update.research()
}

addResearchItem("3x Tier 1 Production", 1, "t1", 3, "r1")
addResearchItem("3x Tier 2 Production", 3, "t2", 3, "r2")
addResearchItem("3x Tier 3 Production", 5, "t3", 3, "r3")
