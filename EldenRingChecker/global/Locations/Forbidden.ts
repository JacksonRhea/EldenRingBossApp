import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  blackBladeKindred: {
    name: "Black Blade Kindred",
    image: "path/to/image.png",
    description:
      "A Black Blade Kindred can be found guarding the Grand Lift of Rold. From Leyndell, head to the eastern gate, take the lift that takes you to Forbidden Lands, and make your way northeast along the snowy path to the Grand Lift of Rold. This is one of the only paths into the Mountaintops of the Giants, so it's hard to miss.",
    location: "Forbidden Lands",
    itemDrops: ["Gargoyle's Black Axe", "Gargoyle's Black Blades"],
    runeRewards: "60000 (NG)",
    healthPoints: "", // Not provided in the image
    affectedBy: ["Thrust"],
    weakness: ["Strike", "Pierce"],
    resistance: ["Slash", "Fire", "Holy", "Lightning", "Thrust"],
    immune: ["Poison", "Sleep", "Scarlet Rot", "Frost", "Bleed"],
    moreInfo: false,
    completed: false,
  },
  nightsCavalryForbiddenLands: {
    name: "Night's Cavalry (Forbidden Lands)",
    image: "image/image.png",
    description:
      "The different Night's Cavalry bosses can only be found at night. There are nine of them in total that can be fought across the Lands Between.",
    location: "Forbidden Lands",
    itemDrops: ["Ash of War: Phantom Slash"],
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
  mimicTear: {
    name: "Stray Mimic Tear",
    image: "path/to/image.png",
    description:
      "The Mimic Tear will copy your character's stats, including the resistances and weaknesses of your currently equipped armor.",
    location: "Forbidden Lands",
    itemDrops: ["Larval Tear x 2", "Silver Tear Mask"],
    runeRewards: "10000 (NG)",
    healthPoints: "",
    affectedBy: [
      "Poison",
      "Scarlet Rot",
      "Bleed",
      "Frost",
      "Sleep",
      "Instant Death",
    ],
    weakness: [],
    resistance: [],
    immune: [],
    moreInfo: false,
    completed: false,
  },
};
