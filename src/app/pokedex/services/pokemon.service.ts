import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getCards(searchBy?: string) {
    const name = searchBy ? searchBy : '';
    const params = {
      name,
    }
    return this.http.get<Pokemon[]>(`${environment.api.pokemontcg.uri}/cards`, { params })
      .pipe(
        delay(2000),
        tap(console.log),
      );
  }

  getCardById(id: string) {
    const params = { id };
    return this.http.get<any>(`${environment.api.pokemontcg.uri}/cards`, { params });
  }

}
