import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.api.pokemontcg.uri}/cards`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getCardById(id: string): Observable<Pokemon> {
    const params = { id };
    return this.http.get<Pokemon>(`${environment.api.pokemontcg.uri}/cards/`, { params })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

}
