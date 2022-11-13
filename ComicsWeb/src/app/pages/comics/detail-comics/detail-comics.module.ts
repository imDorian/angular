import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComicsRoutingModule } from './detail-comics-routing.module';
import { DetailComicsComponent } from './detail-comics.component';


@NgModule({
  declarations: [
    DetailComicsComponent
  ],
  imports: [
    CommonModule,
    DetailComicsRoutingModule,
    RouterModule
  ],
  exports: [
    DetailComicsComponent
  ]
})
export class DetailComicsModule { }
