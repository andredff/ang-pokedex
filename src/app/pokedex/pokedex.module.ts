import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ListComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
