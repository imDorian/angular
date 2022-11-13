import { DetailComicsModule } from './../comics/detail-comics/detail-comics.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DetailComicsModule
  ]
})
export class PostModule { }
