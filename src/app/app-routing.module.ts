import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LightsComponent } from './lights/lights.component';

const routes: Routes = [
  { path: 'lights', component: LightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
