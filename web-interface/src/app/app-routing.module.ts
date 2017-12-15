import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DroneControlComponent } from './drone-control.component';

const routes: Routes = [
  { path: '', redirectTo: '/drone-control', pathMatch: 'full' },
  { path: 'drone-control', component: DroneControlComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
