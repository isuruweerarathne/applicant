import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Applicant0Component } from './applicant0/applicant0.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Applicant1Component } from './applicant1/applicant1.component';
import { ApplicantServiceService } from './services/applicant-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Applicant0Component,
    Applicant1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ApplicantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
