import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable} from 'rxjs';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../classes/patient';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Observable<Patient[]>;
  searchForm;

  constructor(private patientService: PatientService, private router: Router, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      patientName: '',
    });
  }

  ngOnInit(): void {
    console.log('Patient List');
    this.reloadData();
  }
  reloadData(){
    this.patients = this.patientService.getAll();
  }
  deletePatient(id: string) {
    this.patientService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patientDetails(id: string){
    this.router.navigate(['patientDetails', id]);
    // this.router.navigate(['hospitalDetails/' + id]);
  }

  updatePatient(id: string){
    this.router.navigate(['updatePatient', id]);
    // this.router.navigate(['updateHospital/' + id]);
  }

  OnSubmit(searchName){
    console.log('Search name:');
    console.log(searchName.patientName);
    this.patients = this.patientService.findByPatientName(searchName.patientName);
  }
}
