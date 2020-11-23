import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { LibrosComponent } from './libros/libros.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { ViewCapituloComponent } from '../home/view-capitulo/view-capitulo.component';
import { AutorComponent } from './autor/autor.component';
import { ListaAutorComponent } from './lista-autor/lista-autor.component'
import { BiografiaComponent } from './biografia/biografia.component';
import { QuizComponent } from './quiz/quiz.component';
import { PreguntasComponent } from './quiz/preguntas/preguntas/preguntas.component';
import { CalificacionComponent } from './quiz/calificacion/calificacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    PresentacionComponent, 
    OrientacionComponent, 
    LibrosComponent, 
    CapitulosComponent,
    AutorComponent,
    ViewCapituloComponent,
    BiografiaComponent,
    ListaAutorComponent,
    QuizComponent, 
    PreguntasComponent, 
    CalificacionComponent ]

})
export class HomePageModule { }
