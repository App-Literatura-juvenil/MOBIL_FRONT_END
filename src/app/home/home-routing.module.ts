import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LibrosComponent } from './libros/libros.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

import { QuizComponent } from './quiz/quiz.component';
import { CartasDesdeSelvaComponent } from './quiz/libros/cartas-desde-selva/cartas-desde-selva.component';
import { CiudadFlotanteComponent } from './quiz/libros/ciudad-flotante/ciudad-flotante.component';
import { CorazonComponent } from './quiz/libros/corazon/corazon.component';
import { FamiliaRobinsonComponent } from './quiz/libros/familia-robinson/familia-robinson.component';
import { GuerraMundosComponent } from './quiz/libros/guerra-mundos/guerra-mundos.component';
import { HistoriaVecesContadaComponent } from './quiz/libros/historia-veces-contada/historia-veces-contada.component';
import { HombreCicatrizComponent } from './quiz/libros/hombre-cicatriz/hombre-cicatriz.component';
import { IndiasNegrasComponent } from './quiz/libros/indias-negras/indias-negras.component';
import { IslaTesoroComponent } from './quiz/libros/isla-tesoro/isla-tesoro.component';
import { LlamadaSalvajeComponent } from './quiz/libros/llamada-salvaje/llamada-salvaje.component';
import { MundoPerdidoComponent } from './quiz/libros/mundo-perdido/mundo-perdido.component';
import { PrincipitoComponent } from './quiz/libros/principito/principito.component';
import { RobinsonCrusoeComponent } from './quiz/libros/robinson-crusoe/robinson-crusoe.component';
import { TierraLunaComponent } from './quiz/libros/tierra-luna/tierra-luna.component';
import { TigresMalasiaComponent } from './quiz/libros/tigres-malasia/tigres-malasia.component';
import { YanquiComponent } from './quiz/libros/yanqui/yanqui.component';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'libros', component: LibrosComponent},
<<<<<<< Updated upstream
=======
  { path: 'capitulos', component: CapitulosComponent},
  { path: 'view-capitulo', component: ViewCapituloComponent},
  { path: 'quiz', component: QuizComponent},
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


>>>>>>> Stashed changes
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
