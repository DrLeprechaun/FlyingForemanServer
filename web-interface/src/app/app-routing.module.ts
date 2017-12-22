import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { PrivateOfficeComponent } from './private-office.component';
import { DroneControlComponent } from './drone-control.component';
import { DroneRouteComponent } from './drone-route.component';
import { MeasurementsComponent } from './measurements.component';
import { EmailReportComponent } from './email-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'private-office', component: PrivateOfficeComponent},
  { path: 'private-office/drone-control', component: DroneControlComponent},
  { path: 'private-office/drone-route', component: DroneRouteComponent },
  { path: 'private-office/measurements', component: MeasurementsComponent },
  { path: 'email-report', component: EmailReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
