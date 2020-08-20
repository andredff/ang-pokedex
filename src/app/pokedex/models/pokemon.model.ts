export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  ability: Ability;
  hp: string;
  attacks: Attack[];
  resistances: Resistance[];
  weaknesses: Weakness[];
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Weakness {
  type: string;
  value: string;
}

