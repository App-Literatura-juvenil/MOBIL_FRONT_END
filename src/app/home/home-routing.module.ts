import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { AutorComponent } from './autor/autor.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { HomePage } from './home.page';
import { LibrosComponent } from './libros/libros.component';
import { ListaAutorComponent } from './lista-autor/lista-autor.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ViewCapituloComponent } from './view-capitulo/view-capitulo.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'libros', component: LibrosComponent},
  { path: 'capitulos', component: CapitulosComponent},
  { path: 'view-capitulo', component: ViewCapituloComponent},
  { path: 'autores', component: AutorComponent},
  { path: 'autorLista', component: ListaAutorComponent},
  { path: 'libros/:idAuthor', component: LibrosComponent},
  { path: 'biografia/:idAuthor', component: BiografiaComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
