import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BtnAddComponent } from './buttons/btn-add/btn-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonsComponent,
    BtnAddComponent
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
