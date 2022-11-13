import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TituloComponent } from './titulo/titulo.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './list/list.component';
import { PlanetsComponent } from './planets/planets.component';
import { FormsModule } from '@angular/forms';
import { ProTodoListComponent } from './pro-todo-list/pro-todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HelloWorldComponent,
    TituloComponent,
    ComponenteUnoComponent,
    CounterComponent,
    ListComponent,
    PlanetsComponent,
    ProTodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
