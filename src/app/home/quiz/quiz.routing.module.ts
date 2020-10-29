import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartasDesdeSelvaComponent } from './libros/cartas-desde-selva/cartas-desde-selva.component';
import { QuizComponent } from './quiz.component';
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
const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'CartaSelva', component: CartasDesdeSelvaComponent },
  { path: 'CiudadFlotante', component: CiudadFlotanteComponent },
  { path: 'Corazon', component: CorazonComponent},
  { path: 'FamiliaRobinson', component: FamiliaRobinsonComponent},
  { path: 'GuerraMundos', component: GuerraMundosComponent},
  { path: 'HistoriaContada', component: HistoriaVecesContadaComponent},
  { path: 'HombreCicatriz', component: HombreCicatrizComponent },
  { path: 'IndiasNegras', component: IndiasNegrasComponent },
  { path: 'IslaTesoro', component: IslaTesoroComponent },
  { path: 'LlamadaSalvaje', component: LlamadaSalvajeComponent},
  { path: 'MundoPerdido', component: MundoPerdidoComponent},
  { path: 'principito', component: PrincipitoComponent },
  { path: 'robinsonCruso', component: RobinsonCrusoeComponent },
  { path: 'TierraLuna', component: TierraLunaComponent },
  { path: 'TigreMalasia', component: TigresMalasiaComponent},
  { path: 'Yanqui', component: YanquiComponent},


  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
