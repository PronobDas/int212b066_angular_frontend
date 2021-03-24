import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { PatientService } from '../../../services/patient.service';
import { Patient } from '../../../classes/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  id: string;
  patient: Patient;

  constructor(private route: ActivatedRoute, private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];  // params['id']

    this.patientService.get(this.id)
      .subscribe(data => {
        console.log(data);
        this.patient = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['patients']);
  }
  updatePatient(){
    this.router.navigate(['updatePatient', this.id]);
    // this.router.navigate(['updateHospital/' + id]);
  }
}
