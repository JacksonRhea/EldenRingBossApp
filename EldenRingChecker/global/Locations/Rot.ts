import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  dragonkinSoldier: {
    name: "Dragonkin Soldier",
    image: "path/to/image.png",
    description:
      "The Dragonkin Soldier is encountered as a boss in Siofra River located in the western part of the area in a shallow river basin.",
    location: "Siofra River, Lake of Rot",
    itemDrops: [
      "Dragon Halberd (Siofra River)",
      "Dragonscale Blade (Lake of Rot)",
    ],
    runeRewards: "16000 (Siofra River), 58000 (Lake of Rot) (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed"],
    weakness: ["Slash"],
    resistance: ["Lightning", "Bleed", "Frost", "Scarlet Rot", "Poison"],
    immune: ["Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  astelNaturalbornOfTheVoid: {
    name: "Astel, Naturalborn of the Void",
    image: "path/to/image.png",
    description:
      "Astel, Naturalborn of the Void can be found in its cave after entering a coffin in Grand Cloister. This will be in the Ainsel River region. There is a nearby Statue of Marika you can respawn at.",
    location: "Grand Cloister, Lake of Rot",
    itemDrops: ["Remembrance of the Naturalborn"],
    runeRewards: "80000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed"],
    weakness: ["Scarlet Rot", "Poison"],
    resistance: ["Magic", "Fire", "Holy", "Lightning"],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
