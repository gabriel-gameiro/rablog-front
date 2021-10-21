import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './default/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { CardPaginaComponent } from './componentes/card-pagina/card-pagina.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './paginas/home/home.component';
import { PaginaGenericaComponent } from './paginas/pagina-generica/pagina-generica.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPaginaComponent,
    HeaderComponent,
    HomeComponent,
    PaginaGenericaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
