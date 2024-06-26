import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  ancientHeroOfZamorGiantConqueringHerosGrave: {
    name: "Ancient Hero of Zamor (Giant-Conquering Hero's Grave)",
    image: "image/image.png",
    description:
      "An Ancient Hero of Zamor is located in the Giant-Conquering Hero's Grave in the Mountaintops of the Giants.",
    location: "Giant-Conquering Hero's Grave, Mountaintops of the Giants",
    itemDrops: ["Ancient Dragon Knight Kristoff Ashes"],
    runeRewards: "18000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Sleep"],
    weakness: ["Fire", "Lightning", "Sleep"],
    resistance: ["Standard", "Slash", "Strike", "Magic", "Holy"],
    immune: ["Frost", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  borealisTheFreezingFog: {
    name: "Borealis the Freezing Fog",
    image: "path/to/image.png",
    description:
      "Borealis the Freezing Fog can be found at the center of the large ice lake in East Mountaintops of the Giants. You will arrive at this location by heading north from the Grand Lift of Rold, then heading east once you've reached the frozen river. Borealis the Freezing Fog will appear to you in the middle of an ice storm with close to zero visibility. Do not fret, as the ice storm will disappear once you've come into contact with Borealis.",
    location: "Mountaintops of the Giants",
    itemDrops: ["Dragon Heart"],
    runeRewards: "100000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Poison", "Scarlet Rot"],
    weakness: ["Strike"],
    resistance: [
      "Standard",
      "Slash",
      "Magic",
      "Fire",
      "Holy",
      "Lightning",
      "Bleed",
      "Scarlet Rot",
      "Poison",
      "Thrust",
    ],
    immune: ["Frost", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  commanderNiall: {
    name: "Commander Niall",
    image: "path/to/image.png",
    description:
      "Commander Niall can be found at the Castle Sol Rooftop, in the Western part of the Mountaintops of the Giants region. The nearest Site of Grace is the Church of the Eclipse.",
    location: "Castle Sol, Mountaintops of the Giants",
    itemDrops: ["Veteran's Prosthesis"],
    runeRewards: "90000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Poison", "Scarlet Rot", "Sleep", "Frost"],
    weakness: ["Bleed", "Scarlet Rot"],
    resistance: ["Slash", "Frost", "Sleep", "Poison"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  deathRiteBirdWestMountaintops: {
    name: "Death Rite Bird (West Mountaintops of the Giants)",
    image: "../assets/boss-images/death-rite-bird.png",
    description:
      "Death Rite Bird can be found in the West Mountaintops of the Giants.",
    location: "West Mountaintops of the Giants",
    itemDrops: ["Explosive Ghostflame"],
    runeRewards: "77000 (NG)",
    healthPoints: "",
    affectedBy: ["Scarlet Rot"],
    weakness: ["Strike", "Holy"],
    resistance: ["Lightning", "Scarlet Rot", "Thrust"],
    immune: ["Bleed", "Frost", "Sleep", "Poison", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  erdtreeAvatarMountaintopsOfTheGiants: {
    name: "Erdtree Avatar (Mountaintops of the Giants)",
    image: "../assets/boss-images/erdtree-avatar.png",
    description:
      "Erdtree Avatar can be found in the Mountaintops of the Giants near the Minor Erdtree.",
    location: "Mountaintops of the Giants",
    itemDrops: ["Cerulean Crystal Tear", "Ruptured Crystal Tear"],
    runeRewards: "9600 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Frost"],
    weakness: ["Fire"],
    resistance: ["Holy", "Scarlet Rot", "Poison"],
    immune: ["Bleed", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  fireGiant: {
    name: "Fire Giant",
    image: "path/to/image.png",
    description:
      "The Fire Giant can be found at Flame Peak, in the Mountaintops of the Giants region. You are required to beat him to progress in the Main Story.",
    location: "Mountaintops of the Giants",
    itemDrops: ["Remembrance of the Fire Giant"],
    runeRewards: "180000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frost"],
    weakness: ["Slash", "Lightning"],
    resistance: ["Fire", "Holy"],
    immune: ["Scarlet Rot", "Poison"],
    moreInfo: false,
    completed: false,
  },
  godskinNobleSpiritcallersCave: {
    name: "Godskin Noble & Apostle (Spiritcaller Snail)",
    image: "../assets/boss-images/godskin-noble.png",
    description:
      "Godskin Noble & Apostle can be found in Spiritcaller's Cave, Mountaintops of the Giants.",
    location: "Spiritcaller's Cave, Mountaintops of the Giants",
    itemDrops: ["Godskin Swaddling Cloth", "Black Flame Ritual"],
    runeRewards: "70000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frost", "Scarlet Rot", "Poison"],
    weakness: ["Bleed", "Frost", "Sleep"],
    resistance: ["Fire", "Holy"],
    immune: ["Scarlet Rot", "Poison", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  tibiaMarinerSummonwater: {
    name: "Tibia Mariner (Mountaintops)",
    image: "../assets/boss-images/tibia-mariner.png", // Replace with actual image path if necessary
    description: "Tibia Mariner is located in Mountaintops of the Giants.",
    location: "Mountaintops of the Giants",
    itemDrops: ["Deathroot", "Skeletal Militiaman Spirit Ash"],
    runeRewards: "2400 (NG)",
    healthPoints: "3176 (NG)",
    affectedBy: ["Scarlet Rot"],
    weakness: ["Strike", "Holy"],
    resistance: ["Thrust", "Scarlet Rot"],
    immune: ["Poison", "Bleed", "Frost", "Sleep", "Madness"],
    moreInfo: false,
    completed: false,
  },
  ulceratedTreeSpiritGiantsMountaintopCatacombs: {
    name: "Ulcerated Tree Spirit",
    image: "path/to/image.png",
    description:
      "Ulcerated Tree Spirit can be found in Giant's Mountaintop Catacombs.",
    location: "Giant's Mountaintop Catacombs, Mountaintops of the Giants",
    itemDrops: ["Golden Seed", "Glovewort Picker's Bell Bearing 2"],
    runeRewards: "15000",
    healthPoints: "", // Not provided in the image
    affectedBy: ["Poison", "Scarlet Rot", "Frost", "Sleep"],
    weakness: ["Fire", "Frost"],
    resistance: ["Holy", "Bleed", "Scarlet Rot", "Poison"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  vykeKnightOfTheRoundtable: {
    name: "Vyke, Knight of the Roundtable",
    image: "path/to/image.png",
    description:
      "Vyke, Knight of the Roundtable can be found in the Lord Contender's Evergaol in the Mountaintops of the Giants.",
    location: "Lord Contender's Evergaol, Mountaintops of the Giants",
    itemDrops: [
      "Fingerprint Armor",
      "Fingerprint Gauntlets",
      "Fingerprint Greaves",
      "Fingerprint Helm",
      "Vyke's Dragonbolt",
    ],
    runeRewards: "75000 (NG)",
    healthPoints: "",
    affectedBy: [
      "Poison",
      "Scarlet Rot",
      "Bleed",
      "Frostbite",
      "Madness",
      "Sleep",
      "Instant Death",
    ],
    weakness: ["Lightning"],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
