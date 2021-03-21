import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital } from '../../../classes/Hospital';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {
  id: string;
  hospital: Hospital;

  constructor(private route: ActivatedRoute, private router: Router,
              private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.hospital = new Hospital();

    this.id = this.route.snapshot.params.id;  // params['id']

    this.hospitalService.get(this.id)
      .subscribe(data => {
        console.log(data);
        this.hospital = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['hospitals']);
  }
  updateLink(){
    this.router.navigate(['updateHospital/' + this.hospital.hospitalId]);
  }
}
