import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, last, tap, map, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons: Pokemon[];
  pokemons$: Observable<Pokemon[]>;
  results$: Observable<any>;
  queryField = new FormControl;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
    this.onSearch();
  }

  // Método para carregar lista de pokemons
  getPokemons(query?: string){
    const type = 'Pokemon';
    const name = query;
    this.pokemons$ = this.pokemonService.getCards(type, name)
      .pipe(
        map(dados => dados.cards.sort(this.orderByName) ),
      );
  }

  // Método para fazer busca reativa pelo nome do pokemon
  onSearch() {
    this.queryField.valueChanges.pipe(
      debounceTime(400),
      map(value => value.trim()),
      // filter(value => value.length > 1),
      distinctUntilChanged(),
      tap(value => this.getPokemons(value)),
      last()
    ).subscribe();
  }

  // Método para ordernar array por nome
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
