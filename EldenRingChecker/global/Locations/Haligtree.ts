import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  maleniaBladeOfMiquella: {
    name: "Malenia, Blade of Miquella",
    image: "path/to/image.png",
    description:
      "Malenia, Blade of Miquella can be found at the bottom of Miquella's Haligtree, in the Mountaintops of the Giants region. The nearest Site of Grace is the Haligtree Roots site.",
    location: "Miquella's Haligtree",
    itemDrops: ["Malenia's Great Rune", "Remembrance of the Rot Goddess"],
    runeRewards: "480000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frost", "Poison"],
    weakness: ["Fire", "Bleed"],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Magic",
      "Holy",
      "Lightning",
      "Thrust",
    ],
    immune: ["Scarlet Rot", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  royalKnightLorettaMiquellasHaligtree: {
    name: "Royal Knight Loretta (Miquella's Haligtree)",
    image: "../assets/boss-images/royal-knight-loretta.png",
    description:
      "Royal Knight Loretta can be found in Miquella's Haligtree, in Elphael, Brace of the Haligtree. Loretta's spirit form guards the entrance to the Haligtree Town.",
    location: "Miquella's Haligtree, Brace of the Haligtree",
    itemDrops: ["Loretta's Mastery", "Loretta's War Sickle"],
    runeRewards: "200000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frostbite", "Poison", "Scarlet Rot"],
    weakness: [],
    resistance: ["Magic", "Fire", "Holy"],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
