import { Hero } from "./Hero";

export class Warrior extends Hero {
  constructor(exp: number, level: number, abilityPoints: number) {
    super(exp, level, abilityPoints, [
      "Sword Slash",
      "Shield Block",
      "Battle Cry",
    ]);
  }

  clone(): Hero {
    return new Warrior(this.exp, this.level, this.abilityPoints);
  }
}
