import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient, 
  // Patientd 
} from '../_models/patient';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private http: HttpClient) { }

  // getToken(){
  //   return localStorage.getItem("token");
  // }

  private baseUrl:string = `${environment.baseUrl}/supervisor/patients`; 

  


  getAllPatients() : Observable<{status:number, data:Patient[]}>{
    return this.http.get<{status:number, data:Patient[]}>(this.baseUrl);
  }

  getPatientDetails(NID:number): Observable<{status:number, data:Patient}> {
    return this.http.get<{status:number, data:Patient}>(`${this.baseUrl}/details/${NID}`);
    // return this.http.get<Patientd>(`${this.baseUrl}/details/${NID}`);
  }

  addPatient(patient: Patient){
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  updatePatient(patient: Patient){
    return this.http.put<Patient>(this.baseUrl, patient);
  }

  deletePatient(id:number){
    const options = {
      headers : new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: {
        NID: id
      }
    }
    return this.http.delete(this.baseUrl, options);
  }

}
