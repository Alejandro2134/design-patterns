import { Hero } from "./Hero";

export class Wizard extends Hero {
  constructor(exp: number, level: number, habilityPoints: number) {
    super(exp, level, habilityPoints, ["Fireball", "Teleport", "Magic Shield"]);
  }

  clone(): Hero {
    return new Wizard(this.exp, this.level, this.habilityPoints);
  }
}
