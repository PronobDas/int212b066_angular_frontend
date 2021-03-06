import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { CreateTutorialComponent } from './components/tutorial/create-tutorial/create-tutorial.component';
import { UpdateTutorialComponent } from './components/tutorial/update-tutorial/update-tutorial.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalListComponent } from './components/hospital/hospital-list/hospital-list.component';
import { CreateHospitalComponent } from './components/hospital/create-hospital/create-hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { UpdateHospitalComponent } from './components/hospital/update-hospital/update-hospital.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { CreatePatientComponent } from './components/patient/create-patient/create-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialDetailsComponent,
    CreateTutorialComponent,
    UpdateTutorialComponent,
    TutorialListComponent,
    HospitalListComponent,
    CreateHospitalComponent,
    HospitalDetailsComponent,
    UpdateHospitalComponent,
    PatientListComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,
    CreatePatientComponent
  ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
