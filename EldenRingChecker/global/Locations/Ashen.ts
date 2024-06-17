import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  hoarahLoux: {
    name: "Godfrey/Hoarah Loux",
    image: "path/to/image.png",
    description:
      "Hoarah Loux can be found at the Elden Throne in Leyndell, Ashen Capital, in the region of Altus Plateau. This is the same area where you fought Morgott, the Omen King. The nearest Site of Grace is the Queen's Bedchamber.",
    location: "Leyndell, Ashen Capital",
    itemDrops: ["Remembrance of Hoarah Loux"],
    runeRewards: "300000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frost", "Poison", "Scarlet Rot"],
    weakness: [],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  sirGideonOfnir: {
    name: "Sir Gideon Ofnir, the All-Knowing",
    image: "path/to/image.png",
    description:
      "Gideon Ofnir can be found at the Erdtree Sanctuary in Leyndell, Ashen Capital in the region of Altus Plateau. This is the same area where you'll have first encountered Godfrey, First Elden Lord.",
    location: "Leyndell, Ashen Capital",
    itemDrops: [
      "Scepter of the All-Knowing",
      "All-Knowing Armor",
      "All-Knowing Gauntlets",
      "All-Knowing Greaves",
      "All-Knowing Helm",
    ],
    runeRewards: "150000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Madness"],
    weakness: [],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
  radagonAndEldenBeast: {
    name: "Radagon of the Golden Order / Elden Beast",
    image: "file-cAGSHYdnh9Xapb8FGkzE7XWT",
    description: "Radagon of the Golden Order can be found in the Erdtree after beating Hoarah Loux, Warrior. This is located in Leyndell, Ashen Capital, in the region of Altus Plateau. The nearest Site of Grace is the Elden Throne. Elden Beast is the final phase of the fight that begins immediately after defeating Radagon.",
    location: "Elden Throne",
    itemDrops: ["Elden Remembrance"],
    runeRewards: "500000 (NG)",
    healthPoints: "",
    affectedBy: ["Frostbite"],
    weakness: [],
    resistance: ["Holy"],
    immune: ["Bleed"],
    moreInfo: false,
    completed: false
  },
};
