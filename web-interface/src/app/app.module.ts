import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page.component';
import { PrivateOfficeComponent } from './private-office.component';
import { DroneControlComponent } from './drone-control.component';
import { DroneRouteComponent } from './drone-route.component';
import { MeasurementsComponent } from './measurements.component';
import { EmailReportComponent } from './email-report.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PrivateOfficeComponent,
    DroneControlComponent,
    DroneRouteComponent,
    MeasurementsComponent,
    EmailReportComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
