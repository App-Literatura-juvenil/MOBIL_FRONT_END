import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'presentacion', component: PresentacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
