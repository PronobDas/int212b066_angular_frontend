import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/id/${id}`);
  }

  create(data: object): Observable<object> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: object): Observable<object> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByPatientName(patientName: string): Observable<any> {
    return this.http.get(`${baseUrl}/name/${patientName}`);
  }

  findByUpi(upi: string): Observable<any> {
    return this.http.get(`${baseUrl}/id/${upi}`);
  }

  findByNameAndDateOfBirth(name: string, dob: string): Observable<any> {
    return this.http.get(`${baseUrl}/${name}/${dob}`);
  }
}
