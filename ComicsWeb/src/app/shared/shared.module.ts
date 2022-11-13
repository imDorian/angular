import { GalleryComicsComponent } from './components/gallery-comics/gallery-comics.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { bootstrapApplication } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    GalleryComicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    GalleryComicsComponent
  ]
})
export class SharedModule { }
