import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public pokemons;
  public cards;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getCards().subscribe(res => {
      this.pokemons = res;
      this.pokemons = this.pokemons.cards;
      this.pokemons.sort(this.orderByName);
      console.log(this.pokemons);
    });
  }

  pokemonDetails() {

  }

  private orderByName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

}
