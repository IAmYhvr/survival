if (savegame !== null) {
  if (savegame.options.version == "0.3.1") {
    game = savegame
  } else {
    game.items = savegame.items
    game.buildings = savegame.buildings
    game.multipliers = savegame.multipliers
    game.prestige = savegame.prestige
    game.research = savegame.research
    game.options.theme = savegame.options.theme
  }
  update.all()
}

// oh, that's why.
