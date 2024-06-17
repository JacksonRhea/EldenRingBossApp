import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  battlemageHughes: {
    name: "Battlemage Hugues",
    image: "../assets/boss-images/battlemage.png",
    description:
      "You can find Battlemage Hugues at the Sellia Evergaol in the southern part of the Dragonbarrow in the Caelid region.",
    location: "Sellia Evergaol, Dragonbarrow",
    itemDrops: ["Battlemage Hugues"],
    runeRewards: "7800 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Standard", "Slash", "Holy", "Thrust"],
    resistance: ["Strike", "Magic", "Lightning"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  beastmanOfFarumAzulaDragonbarrow: {
    name: "Beastman of Farum Azula (Duo)",
    image: "image/image.png",
    description:
      "Beastman of Farum Azula is found in Dragonbarrow cave in the Caelid region.",
    location: "Dragonbarrow",
    itemDrops: ["Flamedrake Talisman"],
    runeRewards: "1000 (NG)",
    healthPoints: "1417 (NG)",
    affectedBy: ["Poison", "Scarlet Rot", "Sleep", "Bleed", "Frost"],
    weakness: ["Slash", "Fire"],
    resistance: ["Bleed", "Frost"],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  bellBearingHunterIsolatedMerchantsShack: {
    name: "Bell Bearing Hunter (Isolated Merchant's Shack)",
    image: "../assets/boss-images/bell-bearing-hunter.png",
    description:
      "Bell Bearing Hunter can be found at the Isolated Merchant's Shack in Caelid. Each one only spawns at night.",
    location: "Isolated Merchant's Shack, Dragonbarrow",
    itemDrops: ["Gravity Stone Peddler's Bell Bearing"],
    runeRewards: "20000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: [],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Fire",
      "Holy",
      "Bleed",
      "Frost",
      "Scarlet Rot",
      "Sleep",
      "Poison",
    ],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  blackBladeKindredCaelid: {
    name: "Black Blade Kindred (Caelid)",
    image: "../assets/boss-images/black-blade-kindred.png",
    description:
      "From Limgrave, head straight east into Greyoll's Dragonbarrow, then head north, till you reach the Bestial Sanctum. Another way to reach this location would be to meet D, Hunter of the Dead and use the waygate he pins on the map for you. This waygate will lead you straight to the Bestial Sanctum.",
    location: "Bestial Sanctum, Dragonbarrow",
    itemDrops: ["Gargoyle's Black Halberd", "Gargoyle's Blackblade"],
    runeRewards: "88000 (NG)",
    healthPoints: "",
    affectedBy: [],
    weakness: ["Strike"],
    resistance: ["Slash", "Fire", "Holy", "Lightning", "Thrust"],
    immune: ["Poison", "Sleep", "Scarlet Rot", "Frost", "Bleed"],
    moreInfo: false,
    completed: false,
  },
  cleanrotKnightsAbandonedCave: {
    name: "Cleanrot Knight (Duo)",
    image: "../assets/boss-images/cleanrot-knight.png",
    description:
      "Cleanrot Knights can be found in the Abandoned Cave in Caelid.",
    location: "Abandoned Cave, Dragonbarrow",
    itemDrops: ["Gold Scarab"],
    runeRewards: "7000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Bleed", "Frost", "Sleep"],
    weakness: ["Fire", "Sleep"],
    resistance: ["Slash", "Holy", "Bleed", "Frost", "Poison"],
    immune: ["Scarlet Rot", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  flyingDragonGreyll: {
    name: "Flying Dragon Greyoll",
    image: "../assets/boss-images/dragon-greyll.png",
    description:
      "You can find Flying Dragon Greyoll in the Farum Greatbridge, an unnamed location in the northern part of Dragonbarrow in the Caelid region.",
    location: "Dragonbarrow",
    itemDrops: ["Dragon Heart"],
    runeRewards: "80000 (NG)",
    healthPoints: "",
    affectedBy: [],
    weakness: ["Thrust"],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Magic",
      "Fire",
      "Holy",
      "Lightning",
      "Bleed",
      "Frost",
      "Scarlet Rot",
      "Poison",
    ],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  godskinApostleDivineTower: {
    name: "Godskin Apostle (Divine Tower of Caelid)",
    image: "../assets/boss-images/apostle.png",
    description: "Godskin Apostle can be found at the Divine Tower of Caelid.",
    location: "Divine Tower of Caelid, Dragonbarrow",
    itemDrops: [
      "Godskin Apostle Hood",
      "Godskin Apostle Robe",
      "Godskin Apostle Bracelets",
      "Godskin Apostle Trousers",
    ],
    runeRewards: "90000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Slash", "Bleed"],
    resistance: ["Fire", "Holy", "Lightning"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  nightsCavalryGreyollsDragonbarrow: {
    name: "Night's Cavalry (Greyoll's Dragonbarrow)",
    image: "image/image.png",
    description:
      "The different Night's Cavalry bosses can only be found at night. There are nine of them in total that can be fought across the Lands Between.",
    location: "Greyoll's Dragonbarrow",
    itemDrops: ["Ash of War: Repeating Thrust"],
    runeRewards: "2800 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: [],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Fire",
      "Holy",
      "Bleed",
      "Frost",
      "Scarlet Rot",
      "Poison",
    ],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  erdtreeAvatarDragonbarrow: {
    name: "Erdtree Avatar (Dragonbarrow)",
    image: "../assets/boss-images/erdtree-avatar.png",
    description:
      "Putrid Avatar is a Field Boss in Elden Ring. They are still guardians of the Minor Erdtrees, despite rotting from within. A few can also be found guarding Elphael from intruders.",
    location: "Minor Erdtree, Dragonbarrow",
    itemDrops: ["Cerulean Crystal Tear", "Ruptured Crystal Tear"],
    runeRewards: "91,000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Frost"],
    weakness: ["Fire"],
    resistance: ["Holy", "Scarlet Rot", "Poison"],
    immune: ["Bleed", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  crystalianSelliaHideaway: {
    name: "Putrid Crystalian Trio",
    image: "../assets/boss-images/crystallian.png",
    description:
      "Putrid Crystalians is a Boss in Elden Ring. Putrid Crystalians are crystalline humanoids inflicted with Scarlet Rot. This is an optional boss as players don't need to defeat it to advance in Elden Ring.",
    location: "Sellia Hideaway, Dragonbarrow",
    itemDrops: ["Smithing Stone (6)"],
    runeRewards: "5600 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Frost"],
    weakness: ["Blunt"],
    resistance: ["Slash", "Pierce", "Fire", "Magic", "Holy"],
    immune: ["Bleed", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  putridTreeSpirit: {
    name: "Putrid Tree Spirit",
    image: "../assets/boss-images/putrid-tree-spirit.png",
    description:
      "After defeating Radahn, return to his boss arena and follow the cliff to the Northern shore. The entrance to the War-Dead Catacombs will be in the cliffside near the shore. Proceed through the dungeon to fight the Putrid Tree Spirit boss at the end.",
    location: "War-Dead Catacombs, Dragonbarrow",
    itemDrops: ["Golden Seed", "Redmane Knight Ogha"],
    runeRewards: "64000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Fire"],
    resistance: ["Holy", "Bleed", "Scarlet Rot", "Poison"],
    immune: ["Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
};
