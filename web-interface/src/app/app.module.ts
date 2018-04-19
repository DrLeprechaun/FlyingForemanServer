import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/*import { App, NavController } from 'ionic-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';*/

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DroneControlComponent } from './components/drone-control/drone-control.component';
import { DroneRouteComponent } from './components/drone-route/drone-route.component';
import { MeasurementsComponent } from './components/measurements/measurements.component';
import { ReportComponent } from './components/report/report.component';
import { PrivateOfficeComponent } from './components/private-office/private-office.component';
import { BasicService } from './services/basic.service';
import { MeasurementsService } from './services/measurements.service';
import { SettingsComponent } from './components/settings/settings.component';
import { DroneRegistrationComponent } from './components/drone-registration/drone-registration.component';
import { ZoneManagementComponent } from './components/zone-management/zone-management.component';
import { ReportArchiveComponent } from './components/report-archive/report-archive.component';
import { GuideComponent } from './components/guide/guide.component';
import { UsingExamplesComponent } from './components/using-examples/using-examples.component';
import { ReportExamplesComponent } from './components/report-examples/report-examples.component';
import { PmiComponent } from './components/pmi/pmi.component';
import { BimComponent } from './components/bim/bim.component';
import { StandardsComponent } from './components/standards/standards.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { BuyAkvrComponent } from './components/buy-akvr/buy-akvr.component';
import { SupportComponent } from './components/support/support.component';
import { AffiliateProgramComponent } from './components/affiliate-program/affiliate-program.component';
import { CommunitiesCooperationComponent } from './components/communities-cooperation/communities-cooperation.component';
import { UniversitiesCooperationComponent } from './components/universities-cooperation/universities-cooperation.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DroneControlComponent,
    DroneRouteComponent,
    MeasurementsComponent,
    ReportComponent,
    PrivateOfficeComponent,
    SettingsComponent,
    DroneRegistrationComponent,
    ZoneManagementComponent,
    ReportArchiveComponent,
    GuideComponent,
    UsingExamplesComponent,
    ReportExamplesComponent,
    PmiComponent,
    BimComponent,
    StandardsComponent,
    TrainingsComponent,
    BuyAkvrComponent,
    SupportComponent,
    AffiliateProgramComponent,
    CommunitiesCooperationComponent,
    UniversitiesCooperationComponent,
    ContactsComponent
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
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'drone-registration',
        component: DroneRegistrationComponent
      },
      {
        path: 'zone-management',
        component: ZoneManagementComponent
      },
      {
        path: 'report-archive',
        component: ReportArchiveComponent
      },
      {
        path: 'guide',
        component: GuideComponent
      },
      {
        path: 'using-examples',
        component: UsingExamplesComponent
      },
      {
        path: 'report-examples',
        component: ReportExamplesComponent
      },
      {
        path: 'pmi',
        component: PmiComponent
      },
      {
        path: 'bim',
        component: BimComponent
      },
      {
        path: 'standards',
        component: StandardsComponent
      },
      {
        path: 'trainings',
        component: TrainingsComponent
      },
      {
        path: 'buy-akvr',
        component: BuyAkvrComponent
      },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'affiliate-program',
        component: AffiliateProgramComponent
      },
      {
        path: 'universities-cooperation',
        component: UniversitiesCooperationComponent
      },
      {
        path: 'communities-cooperation',
        component: CommunitiesCooperationComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
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
