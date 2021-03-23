import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable} from 'rxjs';
import { HospitalService} from '../../../services/hospital.service';
import { Hospital} from '../../../classes/hospital';
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
    // this.hospitalService.getAll().subscribe(
    //   data => {
    //     this.hospitals = data;
    //     console.log(this.hospitals[0]);
    //     console.log('Hello');
    //   }
    // );
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
     this.router.navigate(['hospitalDetails', id]);
    // this.router.navigate(['hospitalDetails/' + id]);
  }

  updateHospital(id: string){
    this.router.navigate(['updateHospital', id]);
    // this.router.navigate(['updateHospital/' + id]);
  }

  OnSubmit(searchName){
    console.log('Search name:');
    console.log(searchName.hospitalName);
    this.hospitals = this.hospitalService.findByHospitalName(searchName.hospitalName);
  }
}
