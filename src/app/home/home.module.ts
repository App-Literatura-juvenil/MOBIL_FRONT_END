import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { LibrosComponent } from './libros/libros.component';
import { AutorComponent } from './autor/autor.component';
import { ListaAutorComponent } from './lista-autor/lista-autor.component'
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { PresentacionComponent } from "./presentacion/presentacion.component";
import { OrientacionComponent } from "./orientacion/orientacion.component";
import { LibrosComponent } from "./libros/libros.component";
import { AutorComponent } from "./autor/autor.component";
import { BiografiaComponent } from './biografia/biografia.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    PresentacionComponent,
    OrientacionComponent,
    LibrosComponent,
    AutorComponent,
    BiografiaComponent,
  ],
  declarations: [HomePage, PresentacionComponent, OrientacionComponent, LibrosComponent, AutorComponent,
  ListaAutorComponent]

})
export class HomePageModule {}
