function researchtrade() {
  if (game.prestigeBanked > 10) {
    game.prestigeBanked -= 10;
    game.research += 1;
    document.getElementById("researchamt").innerHTML = game.research;
  }
}

function researchMetalTrade() {
  if (game.metal >= 100) {
    game.metal -= 100;
    game.research += 1;
    document.getElementById("researchamt").innerHTML = game.research;
  }
}

function research() {
  if (game.lastResearchProject == 0) {
    if (game.research >= 1) {
      game.research -= 1;
      game.researchproj1 = true;
      game.lastResearchProject += 1
      document.getElementById("researchamt").innerHTML = game.research;
      researchToDisplay()
    }
  } else if (game.lastResearchProject == 1) {
    if (game.research >= 10) {
      game.research -= 10;
      game.researchproj2 = true;
      game.lastResearchProject += 1
      document.getElementById("researchamt").innerHTML = game.research;
      researchToDisplay()
    }
  } else if (game.lastResearchProject == 2) {
    if (game.research >= 15) {
      game.research -= 15;
      game.tier1mult = game.tier1mult * 5
      game.lastResearchProject += 1
      document.getElementById("researchamt").innerHTML = game.research;
      researchToDisplay()
    }
  } else if (game.lastResearchProject == 3) {
    if (game.research >= 25) {
      game.research -= 25;
      game.tier2mult = game.tier2mult * 4
      game.lastResearchProject += 1
      document.getElementById("researchamt").innerHTML = game.research;
      researchToDisplay()
    } else if (game.lastResearchProject == 4) {
      if (game.research >= 50) {
        game.research -= 50;
        game.tier3mult = game.tier3mult * 3
        game.lastResearchProject += 1
        document.getElementById("researchamt").innerHTML = game.research;
        researchToDisplay()
      }
  }
}

function researchToDisplay() {
  if (game.lastResearchProject == 0) {
    document.getElementById("researchDescription").textContent = "Tier 2"
    document.getElementById("researchCost").textContent = "1";
  } else if (game.lastResearchProject == 1) {
    document.getElementById("researchDescription").textContent = "Tier 3"
    document.getElementById("researchCost").textContent = "10";
  } else if (game.lastResearchProject == 2) {
    document.getElementById("researchDescription").textContent = "5x Tier 1 Production"
    document.getElementById("researchCost").textContent = "15";
  } else if (game.lastResearchProject == 3) {
    document.getElementById("researchDescription").textContent = "4x Tier 2 Production"
    document.getElementById("researchCost").textContent = "25";
  } else if (game.lastResearchProject == 4) {
    document.getElementById("researchDescription").textContent = "3x Tier 3 Production"
    document.getElementById("researchCost").textContent = "50";
  }
  if (game.relocations >= 1) {
    document.getElementById("mTR").style.display = "inline-block"
  }
}
