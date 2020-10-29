import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz.component';

import { HomePageRoutingModule } from './quiz.routing.module';
import { CartasDesdeSelvaComponent } from './libros/cartas-desde-selva/cartas-desde-selva.component';
import { CiudadFlotanteComponent } from './libros/ciudad-flotante/ciudad-flotante.component';
import { CorazonComponent } from './libros/corazon/corazon.component';
import { FamiliaRobinsonComponent } from './libros/familia-robinson/familia-robinson.component';
import { GuerraMundosComponent } from './libros/guerra-mundos/guerra-mundos.component';
import { HistoriaVecesContadaComponent } from './libros/historia-veces-contada/historia-veces-contada.component';
import { HombreCicatrizComponent } from './libros/hombre-cicatriz/hombre-cicatriz.component';
import { IndiasNegrasComponent } from './libros/indias-negras/indias-negras.component';
import { IslaTesoroComponent } from './libros/isla-tesoro/isla-tesoro.component';
import { LlamadaSalvajeComponent } from './libros/llamada-salvaje/llamada-salvaje.component';
import { MundoPerdidoComponent } from './libros/mundo-perdido/mundo-perdido.component';
import { PrincipitoComponent } from './libros/principito/principito.component';
import { RobinsonCrusoeComponent } from './libros/robinson-crusoe/robinson-crusoe.component';
import { TierraLunaComponent } from './libros/tierra-luna/tierra-luna.component';
import { TigresMalasiaComponent } from './libros/tigres-malasia/tigres-malasia.component';
import { YanquiComponent } from './libros/yanqui/yanqui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [QuizComponent, CartasDesdeSelvaComponent, CiudadFlotanteComponent, CorazonComponent, FamiliaRobinsonComponent, GuerraMundosComponent, 
    HistoriaVecesContadaComponent, HombreCicatrizComponent, IndiasNegrasComponent, IslaTesoroComponent, LlamadaSalvajeComponent, MundoPerdidoComponent,
    PrincipitoComponent,  RobinsonCrusoeComponent, TierraLunaComponent, TigresMalasiaComponent, YanquiComponent]
})
export class HomePageModule {}
