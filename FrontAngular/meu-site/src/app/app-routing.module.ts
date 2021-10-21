import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaGenericaComponent } from './paginas/pagina-generica/pagina-generica.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'paginaGenerica', component: PaginaGenericaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
