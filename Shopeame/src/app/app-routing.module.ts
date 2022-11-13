import { UsersDetailPageComponent } from './pages/users-detail-page/users-detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
{path: "", component: HomePageComponent},
{path:"products", component: ProductsPageComponent},
{path:"gestion", component: GestionPageComponent},
{path:"users", component: UsersPageComponent},
{path:"users/:id", component: UsersDetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
