import { Hero } from "./Hero";

export class Archer extends Hero {
  constructor(exp: number, level: number, habilityPoints: number) {
    super(exp, level, habilityPoints, ["Arrow Shot", "Bow Mastery", "Stealth"]);
  }

  clone(): Hero {
    return new Archer(this.exp, this.level, this.habilityPoints);
  }
}
