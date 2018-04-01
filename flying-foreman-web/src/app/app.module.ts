import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DroneControlComponent } from './components/drone-control/drone-control.component';
import { DroneRouteComponent } from './components/drone-route/drone-route.component';
import { MeasurementsComponent } from './components/measurements/measurements.component';
import { ReportComponent } from './components/report/report.component';
import { PrivateOfficeComponent } from './components/private-office/private-office.component';
import { BasicService } from './services/basic.service';
import { MeasurementsService } from './services/measurements.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DroneControlComponent,
    DroneRouteComponent,
    MeasurementsComponent,
    ReportComponent,
    PrivateOfficeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'drone-control',
        component: DroneControlComponent
      },
      {
        path: 'drone-route',
        component: DroneRouteComponent
      },
      {
        path: 'measurements',
        component: MeasurementsComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'private-office',
        component: PrivateOfficeComponent
      }
    ])
  ],
  providers: [
    BasicService,
    MeasurementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
