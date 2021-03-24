import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTutorialComponent } from './components/tutorial/create-tutorial/create-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { UpdateTutorialComponent } from './components/tutorial/update-tutorial/update-tutorial.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';
import { HospitalListComponent } from './components/hospital/hospital-list/hospital-list.component';
import { CreateHospitalComponent } from './components/hospital/create-hospital/create-hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { UpdateHospitalComponent } from './components/hospital/update-hospital/update-hospital.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './components/patient/create-patient/create-patient.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialListComponent},
  { path: 'details/:id', component: TutorialDetailsComponent },
  { path: 'create', component: CreateTutorialComponent },
  { path: 'update/:id', component: UpdateTutorialComponent},
  { path: 'hospitals', component: HospitalListComponent},
  { path: 'createHospital', component: CreateHospitalComponent},
  { path: 'hospitalDetails/:id', component: HospitalDetailsComponent},
  { path: 'updateHospital/:id', component: UpdateHospitalComponent},
  { path: 'patients', component: PatientListComponent},
  { path: 'createPatient', component: CreatePatientComponent},
  { path: 'patientDetails/:id', component: PatientDetailsComponent},
  { path: 'updatePatient/:id', component: UpdatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
