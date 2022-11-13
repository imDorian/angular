import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ComicsComponent,
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    SharedModule
  ]
})
export class ComicsModule { }
