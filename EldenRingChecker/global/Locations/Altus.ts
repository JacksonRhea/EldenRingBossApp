import { Boss } from "../../models/Bosses";

export const bosses: Record<string, Boss> = {
  ancientDragonLansseax: {
    name: "Ancient Dragon Lansseax",
    image: "path/to/image.png",
    description:
      "You can find Ancient Dragon Lansseax on a hill south of the Rampartside Path Site of Grace and east of the Sainted Hero's Grave. The hillside where Lansseax appears always has rainy weather and multiple lightning strikes scouring the open field.",
    location: "Altus Plateau",
    itemDrops: ["Lansseax's Glaive"],
    runeRewards: "63000 (NG)",
    healthPoints: "", // Not provided in the image
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Thrust"],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Magic",
      "Fire",
      "Holy",
      "Lightning",
    ],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  ancientHeroOfZamorSaintedHerograve: {
    name: "Ancient Hero of Zamor (Sainted Hero's Grave)",
    image: "image/image.png",
    description:
      "An Ancient Hero of Zamor is located in the Sainted Hero's Grave in Altus Plateau.",
    location: "Sainted Hero's Grave, Altus Plateau",
    itemDrops: ["Ancient Dragon Knight Kristoff Ashes"],
    runeRewards: "16000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Sleep"],
    weakness: ["Fire", "Lightning", "Sleep"],
    resistance: ["Standard", "Slash", "Strike", "Magic", "Holy"],
    immune: ["Frost", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  blackKnifeAssassinSageCave: {
    name: "Black Knife Assassin",
    image: "image/image.png",
    description:
      "Black Knife Assassin can be found in Sage's Cave, Altus Plateau.",
    location: "Sage's Cave, Altus Plateau",
    itemDrops: [
      "Black Knife",
      "Assassin's Cerulean Dagger",
      "Assassin's Crimson Dagger",
      "Black Knifprint",
    ],
    runeRewards: "1000 (NG)",
    healthPoints: "1001 (NG)",
    affectedBy: ["Frost"],
    weakness: [],
    resistance: ["Holy", "Thrust"],
    immune: ["Bleed", "Scarlet Rot", "Sleep", "Poison", "Madness"],
    moreInfo: false,
    completed: false,
  },
  blackKnifeAssassinSaintedHeroGrave: {
    name: "Black Knife Assassin",
    image: "image/image.png",
    description:
      "Black Knife Assassin can be found in Sainted Hero's Grave, Altus Plateau.",
    location: "Sainted Hero's Grave, Altus Plateau",
    itemDrops: [
      "Black Knife",
      "Assassin's Cerulean Dagger",
      "Assassin's Crimson Dagger",
      "Black Knifprint",
    ],
    runeRewards: "1000 (NG)",
    healthPoints: "1001 (NG)",
    affectedBy: ["Frost"],
    weakness: [],
    resistance: ["Holy", "Thrust"],
    immune: ["Bleed", "Scarlet Rot", "Sleep", "Poison", "Madness"],
    moreInfo: false,
    completed: false,
  },
  crystalianAltusTunnel: {
    name: "Crystalian (Spear and Ringblade)",
    image: "../assets/boss-images/crystallian.png",
    description:
      "Crystalian can be found in the Altus Tunnel in Altus Plateau.",
    location: "Altus Tunnel, Altus Plateau",
    itemDrops: ["Smithing Stone (6)"],
    runeRewards: "4600 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Frost"],
    weakness: ["Blunt"],
    resistance: ["Slash", "Pierce", "Fire", "Magic", "Holy"],
    immune: ["Bleed", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  demiHumanQueenGilika: {
    name: "Demi-Human Queen Gilika",
    image: "../assets/boss-images/gilika.png",
    description:
      "Demi-Human Queen Gilika can be found below the Lux Ruins, in Altus Plateau. You'll spot an entrance in the area with a staircase going down.",
    location: "Lux Ruins, Altus Plateau",
    itemDrops: [],
    runeRewards: "8500 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frost", "Scarlet Rot", "Poison", "Sleep"],
    weakness: ["Slash", "Fire", "Scarlet Rot", "Poison"],
    resistance: [],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  elemerOfTheBriar: {
    name: "Elemer of the Briar",
    image: "path/to/image.png",
    description:
      "Elemer of the Briar is found in the Shaded Castle in Altus Plateau. To reach the Shaded Castle, start from the Bridge of Iniquity site of grace and ride across it heading East. Once across the bridge, immediately take a right and drop down two Spirit Springs and then head North. To enter the Shaded Castle, follow the perimeter heading West and jump up to a ledge leading inside. Elemer of the Briar is located toward the center of the Shaded Castle, so you will need to proceed to reach this boss.",
    location: "The Shaded Castle, Altus Plateau",
    itemDrops: ["Briar Greatshield", "Marais Executioner's Sword"],
    runeRewards: "24000 (NG)",
    healthPoints: "", // Not provided in the image
    affectedBy: ["Poison", "Frost", "Scarlet Rot", "Bleed"],
    weakness: ["Standard", "Strike", "Slash", "Holy", "Fire"],
    resistance: [],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  erdtreeBurialWatchdogWyndham: {
    name: "Erdtree Burial Watchdog",
    image: "image/image.png",
    description:
      "An Erdtree Burial Watchdog is the boss of Stormfoot Catacombs located northwest of the Church of Elleh in Limgrave.",
    location: "Wyndham Catacombs, Altus Plateau",
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
  fallingstarBeast: {
    name: "Fallingstar Beast",
    image: "../assets/boss-images/fallingstar-beast.png",
    description:
      "The Fallingstar Beast is encountered as a boss in Altus Plateau, nearest grace is the Outer Wall Phantom Tree",
    location: "Altus Plateau",
    itemDrops: [
      "Gravity Stone Chunk",
      "Smithing Stone 7",
      "Somber Smithing Stone 6",
      "Somberstone Miner's Bell Bearing 1",
    ],
    runeRewards: "7800 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot"],
    weakness: ["Magic", "Fire", "Holy", "Lightning"],
    resistance: [
      "Standard",
      "Strike",
      "Slash",
      "Scarlet Rot",
      "Poison",
      "Thrust",
    ],
    immune: ["Bleed", "Frost", "Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  godefroyTheGrafted: {
    name: "Godefroy the Grafted",
    image: "../assets/boss-images/godefrey.png",
    description:
      "Godefroy the Grafted can be found at the Golden Lineage Evergaol. This is extremely near the Grand Lift of Dectus, so you can go here immediately once you reach Altus Plateau.",
    location: "Golden Lineage Evergaol, Altus Plateau",
    itemDrops: ["Godfrey Icon"],
    runeRewards: "26000 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Scarlet Rot", "Poison", "Frost"],
    weakness: ["Standard", "Strike", "Slash", "Bleed"],
    resistance: ["Holy", "Frost", "Scarlet Rot", "Sleep", "Poison"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  godskinApostleDominula: {
    name: "Godskin Apostle (Dominula, Windmill Village)",
    image: "../assets/boss-images/apostle.png",
    description:
      "Godskin Apostle can be found in Dominula, Windmill Village, Altus Plateau.",
    location: "Dominula, Windmill Village, Altus Plateau",
    itemDrops: ["Godskin Peeler", "Scouring Black Flame"],
    runeRewards: "14000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Slash", "Bleed"],
    resistance: ["Fire", "Holy", "Lightning"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  necromancerGarris: {
    name: "Necromancer Garris",
    image: "../assets/boss-images/garris.png",
    description:
      "You can find Necromancer Garris in the Sage's Cave. Garris's boss area is located behind an illusory wall in a room where you get the Skeletal Mask and the Raptor's Black Feathers.",
    location: "Sage's Cave, Altus Plateau",
    itemDrops: ["Family Heads"],
    runeRewards: "9000 (NG)",
    healthPoints: "",
    affectedBy: [
      "Poison",
      "Scarlet Rot",
      "Bleed",
      "Frost",
      "Sleep",
      "Madness",
      "Instant Death",
    ],
    weakness: ["Fire"],
    resistance: [],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  nightsCavalryAltusPlateau: {
    name: "Night's Cavalry (Altus Plateau)",
    image: "image/image.png",
    description:
      "The different Night's Cavalry bosses can only be found at night. There are nine of them in total that can be fought across the Lands Between.",
    location: "Altus Plateau",
    itemDrops: ["Ash of War: Barricade Shield"],
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
  omenkillerPerfumersGrotto: {
    name: "Omenkiller & Miranda the Blighted Bloom",
    image: "../assets/boss-images/omenkiller.png",
    description:
      "Omenkiller & Miranda can be found in Perfumer's Grotto, Altus Plateau.",
    location: "Perfumer's Grotto, Altus Plateau",
    itemDrops: ["Crucible Knot Talisman"],
    runeRewards: "4900 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost", "Sleep"],
    weakness: ["Bleed", "Frost", "Sleep"],
    resistance: ["Fire", "Scarlet Rot", "Poison"],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  perfumerTricia: {
    name: "Perfumer Tricia & Misbegotten Warrior",
    image: "../assets/boss-images/tricia.png",
    description:
      "Perfumer Tricia is encountered as a boss in the Unsightly Catacombs located in the Altus Plateau.",
    location: "Unsightly Catacombs, Altus Plateau",
    itemDrops: ["Perfumer Tricia"],
    runeRewards: "9400 (NG)",
    healthPoints: "",
    affectedBy: ["Bleed", "Frostbite", "Sleep"],
    weakness: ["Bleed"],
    resistance: [
      "Strike",
      "Magic",
      "Fire",
      "Holy",
      "Lightning",
      "Scarlet Rot",
      "Poison",
    ],
    immune: ["Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  sanguineNoble: {
    name: "Sanguine Noble",
    image: "../assets/boss-images/sanguine.png",
    description:
      "You can find the Sanguine Noble in Writheblood Ruins under one of the ruins past a fog wall.",
    location: "Writheblood Ruins, Altus Plateau",
    itemDrops: [],
    runeRewards: "8800 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost"],
    weakness: ["Slash"],
    resistance: ["Magic", "Fire", "Holy", "Lightning"],
    immune: ["Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
  stonediggerTrollOldAltusTunnel: {
    name: "Stonedigger Troll",
    image: "image/image.png",
    description:
      "Stonedigger Troll can be found at the bottom of the Limgrave Tunnels in the Limgrave region. The boss room can be found behind two large wooden doors.",
    location: "Old Altus Tunnel, Altus Plateau",
    itemDrops: ["Great Club", "Roar Medallion"],
    runeRewards: "1800 (NG)",
    healthPoints: "1295 (NG)",
    affectedBy: ["Scarlet Rot", "Bleed", "Frost", "Sleep"],
    weakness: ["Magic", "Sleep"],
    resistance: [
      "Standard",
      "Slash",
      "Bleed",
      "Frost",
      "Scarlet Rot",
      "Poison",
      "Thrust",
    ],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  tibiaMarinerWyndhamRuins: {
    name: "Tibia Mariner",
    image: "../assets/boss-images/tibia-mariner.png", // Replace with actual image path if necessary
    description:
      "Tibia Mariner is located in Summonwater Village, in the northeast of Limgrave.",
    location: "Wyndham Ruins, Altus Plateau",
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
  treeSentinelAltus: {
    name: "Tree Sentinel (Duo)",
    image: "image/image.png",
    description:
      "The Tree Sentinel is an optional Field Boss located in Altus Plateau",
    location: "Altus Plateau",
    itemDrops: ["Golden Halberd", "Holy Ground"],
    runeRewards: "3200 (NG)",
    healthPoints: "2880 (NG)",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frost", "Sleep"],
    weakness: ["Lightning"],
    resistance: ["Slash", "Holy", "Fire", "Scarlet Rot", "Poison", "Sleep"],
    immune: ["Madness"],
    moreInfo: false,
    completed: false,
  },
  wormface: {
    name: "Wormface",
    image: "../assets/boss-images/wormface.png",
    description:
      "You can find Wormface at the base of the Minor Erdtree at the Altus Plateau. You can access the area by heading down the broken Forest-Spanning Bridge.",
    location: "Minor Erdtree, Altus Plateau",
    itemDrops: ["Crimsonspill Crystal Tear", "Speckled Hardtear"],
    runeRewards: "10000 (NG)",
    healthPoints: "",
    affectedBy: ["Poison", "Scarlet Rot", "Bleed", "Frostbite"],
    weakness: ["Slash"],
    resistance: ["Holy"],
    immune: ["Sleep", "Madness", "Instant Death"],
    moreInfo: false,
    completed: false,
  },
};
