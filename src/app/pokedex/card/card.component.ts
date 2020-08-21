import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  id: string;
  pokemon: any;
  pokemon$: Observable<Pokemon>;

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getById();
  }

  getById() {
    this.pokemonService.getCardById(this.id)
      .pipe(
        map(data => data.cards),
      ).subscribe(data => {
        this.pokemon = data[0]
        console.log(this.pokemon);
      }) ;
  }

}
