
Hooks.once("init", function () {
  console.log("Crystal Brave System | Init");

  CONFIG.Actor.documentClass = CrystalBraveActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("crystal-brave-system", CrystalBraveSheet, {
    label: "Crystal Brave Character Sheet",
    types: ["character"],
    makeDefault: true
  });
});

class CrystalBraveActor extends Actor {
  // Future logic for HP/MP here
}

class CrystalBraveSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["crystal-brave", "sheet", "actor"],
      template: "systems/crystal-brave-system/templates/actors/character-sheet.html",
      width: 600,
      height: "auto",
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }]
    });
  }

  getData() {
    const data = super.getData();
    data.config = {
      proficiencyRanks: {
        "S+": "S+",
        "S": "S",
        "A+": "A+",
        "A": "A",
        "B": "B",
        "C": "C",
        "C-": "C−",
        "D": "D",
        "D-": "D−",
        "F": "F"
      }
    };
    return data;
  }
}
