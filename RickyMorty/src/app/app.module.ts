import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UsersPagesComponent } from './pages/users-pages/users-pages.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormErrorComponent } from './shared/components/form-error/form-error.component';
import { CharactersDetailPageComponent } from './pages/character-page/characters-detail-page/characters-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterPageComponent,
    ContactPageComponent,
    UsersPagesComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    FormErrorComponent,
    CharactersDetailPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
