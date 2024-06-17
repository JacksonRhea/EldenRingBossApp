import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  esgarPriestOfBlood: {
    name: "Esgar, Priest of Blood",
    image: "../assets/boss-images/esgar.png",
    description:
      "Esgar, Priest of Blood is fought as the boss of Leyndell Catacombs, which is located within the Subterranean Shunning Grounds in Leyndell, Royal Capital.",
    location: "Leyndell, Royal Capital",
    itemDrops: ["Lord of Blood's Exultation"],
    runeRewards: "30000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost", "Madness"],
    weakness: ["Fire", "Lightning"],
    resistance: [""],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  godfreyFirstEldenLord: {
    name: "Godfrey, First Elden Lord",
    image: "path/to/image.png",
    description:
      "Godfrey, First Elden Lord can be found in the southern portion of Leyndell, Royal Capital, in the region of Altus Plateau. The nearest Site of Grace is the Avenue Balcony, but there is a Stake of Marika right outside the boss arena where you can respawn.",
    location: "Leyndell, Royal Capital",
    itemDrops: ["Talisman Pouch"],
    runeRewards: "80000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Bleed", "Scarlet Rot", "Frost", "Sleep"],
    weakness: [],
    resistance: ["Holy"],
    immune: ["Bleed", "Scarlet Rot"],
    moreInfo: false,
    completed: false,
  },
  mohgTheOmen: {
    name: "Mohg, The Omen",
    image: "path/to/image.png",
    description:
      "Mohg, The Omen can be found deep in the Subterranean Shunning Grounds, close to the Forsaken Depths Site of Grace. The Subterranean Shunning Grounds can be reached by starting from the Avenue Balcony Site of Grace in the middle of Leyndell, Royal Capital, then going down a nearby well. Mohg's boss room can be found at the deep end of Subterranean Shunning Grounds.",
    location: "Leyndell, Royal Capital",
    itemDrops: ["Bloodflame Talons"],
    runeRewards: "100000 (NG)",
    healthPoints: "", // Not provided in the image
    affectedBy: [""], // Not specified in the image
    weakness: [""], // Not specified in the image
    resistance: [""], // Not specified in the image
    immune: ["Bleed", "Frost", "Scarlet Rot", "Poison"],
    moreInfo: false,
    completed: false,
  },
  morgottTheOmenKing: {
    name: "Morgott, the Omen King",
    image: "path/to/image.png",
    description:
      "Morgott, the Omen King can be found in Leyndell, Royal Capital, after beating Godfrey, First Elden Lord's Golden Shade. The nearest Site of Grace is the Queen's Bedchamber.",
    location: "Leyndell, Royal Capital",
    itemDrops: ["Morgott's Great Rune", "Remembrance of the Omen King"],
    runeRewards: "90000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frostbite", "Poison", "Scarlet Rot"],
    weakness: [],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
