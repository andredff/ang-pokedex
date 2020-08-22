import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getCards(superType: string, searchBy?: string) {
    const name = searchBy ? searchBy : '';
    const params = {
      supertype: superType,
      name,
    };
    return this.http.get<Pokemon[]>(`${environment.api.pokemontcg.uri}/cards`, { params })
      .pipe(
        // delay só para simular uma demorar e aparecer o loading
        delay(2000),
        tap(console.log),
      );
  }

  getCardById(id: string) {
    const params = { id };
    return this.http.get<any>(`${environment.api.pokemontcg.uri}/cards`, { params })
    .pipe(
      // delay só para simular uma demorar e aparecer o loading
      delay(2000),
      // tap(console.log),
    );
  }

}
