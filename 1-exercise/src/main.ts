import { HeroFactory } from "./HeroFactory";

const heroFactory = new HeroFactory();

const hero = heroFactory.createHero("Wizard");
console.log(hero);

const copyOfHero = hero.clone();
console.log(copyOfHero);
