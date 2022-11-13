import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ListUsersComponent } from './shared/components/list-users/list-users.component';
import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { Router, RouterModule } from '@angular/router';
import { PreviewComponent } from './shared/components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    GestionPageComponent,
    GalleryComponent,
    HomeComponent,
    HeaderComponent,
    UsersPageComponent,
    ListUsersComponent,
    UsersDetailPageComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
