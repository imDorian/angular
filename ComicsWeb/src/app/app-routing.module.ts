import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule) },
  {path:"comics", loadChildren: () => import('./pages/comics/comics.module').then(m=>m.ComicsModule)},
  {path:"post", loadChildren: () => import('./pages/post/post.module').then(m=>m.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
