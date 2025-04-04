import { Hero } from "./Hero";

export class Wizard extends Hero {
  constructor(exp: number, level: number, abilityPoints: number) {
    super(exp, level, abilityPoints, ["Fireball", "Teleport", "Magic Shield"]);
  }

  clone(): Hero {
    return new Wizard(this.exp, this.level, this.abilityPoints);
  }
}
