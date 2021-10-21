import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './default/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPaginaComponent } from './componentes/card-pagina/card-pagina.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './paginas/home/home.component';
import { SiteGenericoComponent } from './paginas/site-generico/site-generico.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPaginaComponent,
    HeaderComponent,
    HomeComponent,
    SiteGenericoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
