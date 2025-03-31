import { Wizard } from "./Wizard";
import { Hero } from "./Hero";
import { Warrior } from "./Warrior";
import { Archer } from "./Archer";

type HeroClass = "Wizard" | "Warrior" | "Archer";

export class HeroFactory {
  constructor() {}

  createHero(heroClass: HeroClass): Hero {
    const hero: { [heroClass: string]: Hero } = {
      Wizard: new Wizard(10, 1, 4),
      Warrior: new Warrior(7, 1, 6),
      Archer: new Archer(5, 1, 8),
    };

    return hero[heroClass];
  }
}
