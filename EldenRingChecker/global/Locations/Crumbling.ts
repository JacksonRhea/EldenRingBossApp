import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  malekithTheBlackBlade: {
    name: "Malekith, The Black Blade",
    image: "path/to/image.png",
    description:
      "Malekith, the Black Blade can be found in the temple to the right of the Beside the Great Bridge Site of Grace, in the region of Crumbling Farum Azula. You are required to beat this boss to progress in the main story.",
    location: "Crumbling Farum Azula",
    itemDrops: ["Remembrance of the Black Blade"],
    runeRewards: "220000 (NG)",
    healthPoints: "",
    affectedBy: [],
    weakness: [],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  godskinDuo: {
    name: "Godskin Duo",
    image: "path/to/image.png",
    description:
      "The Godskin Duo can be found in the Dragon Temple, in the region of Crumbling Farum Azula. It is required to beat these bosses to progress the main story.",
    location: "Crumbling Farum Azula",
    itemDrops: ["Smithing-Stone Miner's Bell Bearing 4", "Black Flame Tornado"],
    runeRewards: "170000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed"],
    weakness: ["Slash", "Bleed"],
    resistance: ["Pierce", "Fire", "Holy"],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  dragonlordPlacidusax: {
    name: "Dragonlord Placidusax",
    image: "path/to/image.png",
    description:
      "Dragonlord Placidusax can be found by progressing through Crumbling Farum Azula until you reach the Site of Grace labeled Beside the Great Bridge. From there, head back down the nearby elevator and out into the open area in front of the chapel. You will find a rocky ledge to drop down onto.",
    location: "Crumbling Farum Azula",
    itemDrops: ["Remembrance of the Dragonlord"],
    runeRewards: "280000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed"],
    weakness: ["Frost"],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
