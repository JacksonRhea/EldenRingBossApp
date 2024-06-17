import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  dragonkinSoldierOfNokstella: {
    name: "Dragonkin Soldier of Nokstella",
    image: "path/to/image.png",
    description:
      "The Dragonkin Soldier of Nokstella is encountered as a boss in Ainsel River. It is located in the western part of the river across through a small path close to the Ainsel River Downstream Site of Grace.",
    location: "Ainsel River",
    itemDrops: ["Frozen Lightning Spear"],
    runeRewards: "12000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed"],
    weakness: ["Slash"],
    resistance: ["Lightning", "Bleed", "Frost", "Scarlet Rot", "Poison"],
    immune: ["Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
};
