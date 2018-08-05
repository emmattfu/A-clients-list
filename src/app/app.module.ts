import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FormsModule } from "@angular/forms";
import {NgxMaskModule} from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
