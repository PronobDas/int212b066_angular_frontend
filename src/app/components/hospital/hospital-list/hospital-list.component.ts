import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable} from 'rxjs';
import { HospitalService} from '../../../services/hospital.service';
import { Hospital} from '../../../classes/Hospital';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals: Observable<Hospital[]>;
  searchForm;

  constructor(private hospitalService: HospitalService, private router: Router, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      hospitalName: '',
    });
  }

  ngOnInit(): void {
    console.log('Hospital list');
    this.reloadData();
  }
  reloadData(){
    this.hospitals = this.hospitalService.getAll();
    console.log(this.hospitals);
  }

  deleteHospital(id: string) {
    this.hospitalService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  hospitalDetails(id: string){
    this.router.navigate(['details', id]);
  }

  updateHospital(id: string){
    this.router.navigate(['update', id]);
  }

  OnSubmit(searchName){
    console.log('Search name:');
    console.log(searchName.name);
    this.hospitals = this.hospitalService.findByHospitalName(searchName.name);
  }
}
