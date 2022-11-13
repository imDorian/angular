import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { ColorBoxComponent } from './motorcycle/color-box/color-box.component';
import { BtnPopComponent } from './btn-pop/btn-pop.component';
import { BtnAddComponent } from './btn-add/btn-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleComponent,
    ColorBoxComponent,
    BtnPopComponent,
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
