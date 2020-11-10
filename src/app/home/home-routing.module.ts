import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomePage } from './home.page';
import { LibrosComponent } from './libros/libros.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { QuizComponent } from './quiz/quiz.component';

import {PreguntasComponent} from './quiz/preguntas/preguntas/preguntas.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'libros', component: LibrosComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'pregunta/:idBook', component: PreguntasComponent},
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
