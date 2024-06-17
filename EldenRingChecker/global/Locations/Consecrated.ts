import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  astelStarsOfDarkness: {
    name: "Astel, Stars of Darkness",
    image: "path/to/image.png",
    description:
      "Astel, Stars of Darkness is found at the end of Yelough Anix Tunnel in the Consecrated Snowfield section of the Mountaintops of the Giants.",
    location: "Yelough Anix Tunnel, Consecrated Snowfield",
    itemDrops: ["Meteorite of Astel"],
    runeRewards: "120000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed"],
    weakness: [],
    resistance: [
      "Magic",
      "Fire",
      "Holy",
      "Lightning",
      "Bleed",
      "Scarlet Rot",
      "Poison",
    ],
    immune: ["Frost", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  deathRiteBirdConsecratedSnowfield: {
    name: "Death Rite Bird (Consecrated Snowfield)",
    image: "../assets/boss-images/death-rite-bird.png",
    description: "Death Rite Bird can be found in the Consecrated Snowfield.",
    location: "Consecrated Snowfield",
    itemDrops: ["Death Ritual Spear"],
    runeRewards: "220000 (NG)",
    healthPoints: "",
    affectedBy: ["Scarlet Rot"],
    weakness: ["Strike", "Holy"],
    resistance: ["Lightning", "Scarlet Rot", "Thrust"],
    immune: ["Bleed", "Frost", "Sleep", "Poison", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  greatWyrmTheodorix: {
    name: "Great Wyrm Theodorix",
    image: "path/to/image.png",
    description:
      "Great Wyrm Theodorix can be found near the Albinauric Rise, right outside the Cave of the Forlorn. This area will be in the Consecrated Snowfields.",
    location: "Albinauric Rise, Consecrated Snowfield",
    itemDrops: ["Dragon Heart"],
    runeRewards: "180000 (NG)",
    healthPoints: "", // Not provided in the image
    affectedBy: ["Bleed", "Poison", "Scarlet Rot", "Frost", "Sleep"],
    weakness: ["Standard", "Strike", "Thrust"],
    resistance: [
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
  misbegottenCrusader: {
    name: "Misbegotten Crusader",
    image: "path/to/image.png",
    description:
      "Misbegotten Crusader can be found at the end of the Cave of the Forlorn, near Albinuric Rise. You'll have to enter the Consecrated Snowfield to reach this dungeon.",
    location: "Cave of the Forlorn, Consecrated Snowfield",
    itemDrops: ["Golden Order Greatsword"],
    runeRewards: "93000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Scarlet Rot", "Poison", "Frost", "Sleep"],
    weakness: ["Slash", "Fire"],
    resistance: [
      "Magic",
      "Holy",
      "Lightning",
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
  nightsCavalryMountaintopsOfTheGiants: {
    name: "Night's Cavalry Duo",
    image: "image/image.png",
    description:
      "The different Night's Cavalry bosses can only be found at night. There are nine of them in total that can be fought across the Lands Between.",
    location: "Consecrated Snowfield",
    itemDrops: ["Ash of War: Shared Order"],
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
  putridGraveWardenDuelist: {
    name: "Putrid Grave Warden Duelist",
    image: "path/to/image.png",
    description:
      "Putrid Grave Warden Duelist can be found at the end of the Consecrated Snowfield Catacombs in the Mountaintops of the Giants region.",
    location: "Consecrated Snowfield Catacombs",
    itemDrops: ["Rotten Gravekeeper Cloak", "Great Grave Glovewort"],
    runeRewards: "78000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Bleed", "Frost", "Scarlet Rot", "Sleep"],
    weakness: ["Magic", "Bleed"],
    resistance: ["Scarlet Rot", "Poison"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  erdtreeAvatarDragonbarrow: {
    name: "Erdtree Avatar (Dragonbarrow)",
    image: "../assets/boss-images/erdtree-avatar.png",
    description:
      "Putrid Avatar is a Field Boss in Elden Ring. They are still guardians of the Minor Erdtrees, despite rotting from within. A few can also be found guarding Elphael from intruders.",
    location: "Minor Erdtree, Consecrated Snowfield",
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
};