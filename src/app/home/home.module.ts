import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { LibrosComponent } from './libros/libros.component';
import {QuizComponent} from './quiz/quiz.component';
import {PreguntasComponent} from './quiz/preguntas/preguntas/preguntas.component';
import { CalificacionComponent } from './quiz/calificacion/calificacion.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PresentacionComponent,
     OrientacionComponent, LibrosComponent,
     QuizComponent, PreguntasComponent, CalificacionComponent ]
})
export class HomePageModule {}
