export abstract class Hero {
  protected exp: number;
  protected level: number;
  protected abilityPoints: number;
  protected abilities: string[];

  abstract clone(): Hero;

  constructor(
    exp: number,
    level: number,
    abilityPoints: number,
    abilities: string[]
  ) {
    this.exp = exp;
    this.level = level;
    this.abilityPoints = abilityPoints;
    this.abilities = abilities;
  }
}
