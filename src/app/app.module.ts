import {LOCALE_ID ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { ContatosComponent } from './contatos/contatos.component';
import { SharedModule } from './shared/shared.module';


registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NaoEncontradoComponent,
    ExtratoComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
