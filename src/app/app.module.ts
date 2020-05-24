import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantService } from './services/applicant.service';

@NgModule({
  declarations: [AppComponent, ApplicantComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [ApplicantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
