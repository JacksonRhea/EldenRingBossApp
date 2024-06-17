import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  crucibleKnightSiluria: {
    name: "Crucible Knight Siluria",
    image: "path/to/image.png",
    description:
      "Crucible Knight Siluria can be found across The Nameless Eternal City Site of Grace in the Deeproot Depths.",
    location: "Deeproot Depths",
    itemDrops: ["Siluria's Tree"],
    runeRewards: "25000 (NG)",
    healthPoints: "",
    affectedBy: ["Frost", "Scarlet Rot", "Poison", "Sleep"],
    weakness: ["Fire", "Lightning"],
    resistance: ["Magic", "Holy", "Frost", "Scarlet Rot", "Sleep", "Poison"],
    immune: ["Bleed", "Madness"],
    moreInfo: false,
    completed: false,
  },
  fiasChampions: {
    name: "Fia's Champions",
    image: "path/to/image.png",
    description:
      "Fia's Champions is a Boss in Elden Ring. Fia's Champions are five invader enemies and are found in Deeproot Depths. This is an optional boss as players don't need to defeat it to advance in Elden Ring.",
    location: "Deeproot Depths",
    itemDrops: ["Fia's Mist"],
    runeRewards: "40000 (NG)",
    healthPoints: "",
    affectedBy: ["Frost", "Scarlet Rot", "Poison", "Sleep"],
    weakness: ["Fire", "Lightning"],
    resistance: ["Magic", "Holy", "Frost", "Scarlet Rot", "Sleep", "Poison"],
    immune: ["Bleed", "Madness"],
    moreInfo: false,
    completed: false,
  },
  lichdragonFortissax: {
    name: "Lichdragon Fortissax",
    image: "path/to/image.png",
    description:
      "Lichdragon Fortissax can be found at the Prince of Death's Throne Site of Grace in the Deeproot Depths region in the Underground. You'll have to continue Fia's questline after defeating her Champions to gain access to this boss.",
    location: "Deeproot Depths",
    itemDrops: ["Remembrance of the Lichdragon"],
    runeRewards: "90000 (NG)",
    healthPoints: "",
    affectedBy: [],
    weakness: [],
    resistance: ["Holy", "Lightning"],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
