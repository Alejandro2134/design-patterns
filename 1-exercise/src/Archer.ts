import { Hero } from "./Hero";

export class Archer extends Hero {
  constructor(exp: number, level: number, abilityPoints: number) {
    super(exp, level, abilityPoints, ["Arrow Shot", "Bow Mastery", "Stealth"]);
  }

  clone(): Hero {
    return new Archer(this.exp, this.level, this.abilityPoints);
  }
}
