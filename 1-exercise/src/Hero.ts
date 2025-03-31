export abstract class Hero {
  protected exp: number;
  protected level: number;
  protected habilityPoints: number;
  protected abilities: string[];

  abstract clone(): Hero;

  constructor(
    exp: number,
    level: number,
    habilityPoints: number,
    abilities: string[]
  ) {
    this.exp = exp;
    this.level = level;
    this.habilityPoints = habilityPoints;
    this.abilities = abilities;
  }
}
