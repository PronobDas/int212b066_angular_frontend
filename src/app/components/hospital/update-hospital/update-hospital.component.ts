import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital } from '../../../classes/hospital';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  id: string;
  hospital: Hospital;
  constructor(private route: ActivatedRoute, private router: Router,
              private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospital = new Hospital();
    this.id = this.route.snapshot.params.id;

    this.hospitalService.get(this.id)
      .subscribe(data => {
        console.log(data);
        this.hospital = data;
      }, error => console.log(error));
  }

  updateHospital(){
    this.hospitalService.update(this.id, this.hospital).subscribe(
      data => {
        console.log(data);
        this.hospital = new Hospital();
        this.list();
      }, error => console.log(error)
    );
  }

  onSubmit(){
    this.updateHospital();
  }

  list(){
    this.router.navigate(['hospitals']);
  }
}
