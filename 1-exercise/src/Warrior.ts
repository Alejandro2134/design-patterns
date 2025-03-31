import { Hero } from "./Hero";

export class Warrior extends Hero {
  constructor(exp: number, level: number, habilityPoints: number) {
    super(exp, level, habilityPoints, [
      "Sword Slash",
      "Shield Block",
      "Battle Cry",
    ]);
  }

  clone(): Hero {
    return new Warrior(this.exp, this.level, this.habilityPoints);
  }
}
