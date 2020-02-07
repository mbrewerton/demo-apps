import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UkNavbarModule} from '@mbrewerton/ng-uikit3';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UkNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
