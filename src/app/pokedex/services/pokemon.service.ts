import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://api.pokemontcg.io/v1/';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}cards`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getCardById(id): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}cards/${id}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

}
