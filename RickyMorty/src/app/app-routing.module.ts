import { UsersPagesComponent } from './pages/users-pages/users-pages.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailPageComponent } from './pages/character-page/characters-detail-page/characters-detail-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"contact", component: ContactPageComponent},
  {path:"characters", component: CharacterPageComponent},
  {path:"characters/:id", component: CharactersDetailPageComponent},
  {path:"users", component: UsersPagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
