import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  ancientHeroOfZamorWeepingEvergaol: {
    name: "Ancient Hero of Zamor (Weeping Evergaol)",
    image: "image/image.png",
    description:
      "An Ancient Hero of Zamor is imprisoned in the Weeping Evergaol east of the Fourth Church of Marika in the Weeping Peninsula and requires 1 Stonesword Key to access.",
    location: "Weeping Evergaol, Weeping Peninsula",
    itemDrops: ["Radagon's Scarseal"],
    runeRewards: "5400 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Sleep"],
    weakness: ["Fire", "Lightning", "Sleep"],
    resistance: ["Standard", "Slash", "Strike", "Magic", "Holy"],
    immune: ["Frost", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  cemeteryShadeTombsword: {
    name: "Cemetery Shade",
    image: "image/image.png",
    description:
      "A Cemetery Shade can be found deep within Tombsward Catacombs in Limgrave.",
    location: "Tombsward Catacombs,, Weeping Peninsula",
    itemDrops: ["Lhutel the Headless", "Twinsage Sorcerer"],
    runeRewards: "2640 - 4200 (NG)",
    healthPoints: "",
    affectedBy: [],
    weakness: ["Holy"],
    resistance: ["Pierce"],
    immune: ["Bleed", "Frost", "Scarlet Rot", "Sleep", "Poison", "Madness"],
    moreInfo: false,
    completed: false,
  },
  deathbirdWeepingPeninsula: {
    name: "Deathbird (Weeping Peninsula)",
    image: "image/image.png",
    description:
      "The Deathbird in Weeping Peninsula can be found in the Weeping Peninsula region.",
    location: "Weeping Peninsula",
    itemDrops: ["Sacrificial Axe"],
    runeRewards: "3900 (NG)",
    healthPoints: "",
    affectedBy: ["Scarlet Rot"],
    weakness: ["Strike", "Slash", "Holy"],
    resistance: ["Lightning", "Thrust"],
    immune: ["Bleed", "Frost", "Sleep", "Poison", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  erdtreeAvatarWeepingPeninsula: {
    name: "Erdtree Avatar (Weeping Peninsula)",
    image: "../assets/boss-images/erdtree-avatar.png",
    description:
      "Erdtree Avatar can be found in the Weeping Peninsula near the Minor Erdtree.",
    location: "Weeping Peninsula",
    itemDrops: ["Opaline Bubbletear", "Crimsonburst Crystal Tear"],
    runeRewards: "3600 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Frost"],
    weakness: ["Fire"],
    resistance: ["Holy", "Scarlet Rot", "Poison"],
    immune: ["Bleed", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  erdtreeBurialWatchdogImpaler: {
    name: "Erdtree Burial Watchdog",
    image: "image/image.png",
    description:
      "An Erdtree Burial Watchdog is the boss of Stormfoot Catacombs located northwest of the Church of Elleh in Limgrave.",
    location: "Impaler's Catacombs, Weeping Peninsula",
    itemDrops: [
      "Noble Sorcerer Ashes",
      "Impalers Catacombs",
      "Morphed Catacombs",
      "Cilfailog Catacombs",
      "Wyndham Catacombs",
    ],
    runeRewards:
      "1300 (Stormfoot Catacombs), 1600 (Impalers Catacombs), 2400 (Cliffbottom Catacombs), 2600 (Morphed Catacombs), 3600 (Wyndham Catacombs)",
    healthPoints: "",
    affectedBy: [],
    weakness: ["Strike"],
    resistance: [
      "Standard",
      "Slash",
      "Fire",
      "Holy",
      "Lightning",
      "Bleed",
      "Frost",
      "Scarlet Rot",
      "Poison",
      "Thrust",
    ],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  leonineMisbegotten: {
    name: "Leonine Misbegotten",
    image: "image/image.png",
    description:
      "Leonine Misbegotten can be found at Castle Morne, which is located in the Weeping Peninsula. The nearest Site of Grace is the Beside the Rampart Gaol one.",
    location: "Castle Morne, Weeping Peninsula",
    itemDrops: ["Grafted Blade Greatsword"],
    runeRewards: "3800 (NG)",
    healthPoints: "2180 (NG)",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost", "Sleep"],
    weakness: ["Slash", "Fire"],
    resistance: ["Bleed", "Frost", "Scarlet Rot", "Sleep", "Poison"],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  mirandaTheBlightedBloom: {
    name: "Miranda the Blighted Bloom",
    image: "image/image.png",
    description:
      "Miranda the Blighted Bloom can be found in Tombsward Cave, on the west side of the Weeping Peninsula.",
    location: "Tombsward Cave, Weeping Peninsula",
    itemDrops: ["Viridian Amber Medallion"],
    runeRewards: "1300 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Sleep", "Frost"],
    weakness: ["Slash", "Fire", "Frost"],
    resistance: ["Strike", "Holy", "Lightning", "Scarlet Rot", "Poison"],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  nightsCavalryWeepingPeninsula: {
    name: "Night's Cavalry (Weeping Peninsula)",
    image: "image/image.png",
    description:
      "The different Night's Cavalry bosses can only be found at night. There are nine of them in total that can be fought across the Lands Between.",
    location: "Weeping Peninsula",
    itemDrops: ["Ash of War: Poison Moth Flight"],
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
  runebear: {
    name: "Runebear",
    image: "image/image.png",
    description:
      "Runebear can be found in Earthbore Cave, which is located down a cliffside north of the forest in Weeping Peninsula. To easily locate this cave, there will be a spectral candle stand in the forest. Interacting with it will summon a ghost that leads you to the entrance of Earthbore Cave.",
    location: "Earthbore Cave, Weeping Peninsula",
    itemDrops: ["Spelldrake Talisman"],
    runeRewards: "2600 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Bleed", "Frost", "Scarlet Rot", "Poison"],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  scalyMisbegotten: {
    name: "Scaly Misbegotten",
    image: "image/image.png",
    description:
      "Scaly Misbegotten can be found in Morne Tunnel, which is at the center of the Weeping Peninsula in Limgrave.",
    location: "Morne Tunnel, Weeping Peninsula",
    itemDrops: ["Rusted Anchor"],
    runeRewards: "2000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Scarlet Rot", "Poison", "Frost", "Sleep"],
    weakness: ["Fire", "Thrust"],
    resistance: ["Slash"],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
}