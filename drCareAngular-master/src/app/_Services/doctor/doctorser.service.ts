import { Injectable } from "@angular/core";
import { Doctor } from "../../_Models/doctor/doctor";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class DoctorserService {

  baseUrl: string = `${ environment.baseUrl }/admin/doctor`;

  Url: string = `${ environment.baseUrl }/admin/clinic/doctor/add`;


  // getAllDoctor(){
  //   return this.http.get<Doctor[]>(this.baseUrl)
  // }

  AddDoctor(_id: any, doc: Doctor): Observable<{ status: number }> {
    return this.http.post<{ status: number }>(this.Url + "/" + _id, doc);
  }

  deleteDoctor(NID: number): Observable<Doctor> {
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      body: {
        NID: NID
      }
    };
    return this.http.delete<Doctor>(this.baseUrl, options);
  }

  updateDoctor(doc: Doctor) {
    return this.http.put<Doctor>(this.baseUrl, doc);
  }
  getDoctordetails(NID: number): Observable<{ status: number; data: Doctor }> {
    return this.http.get<{ status: number; data: Doctor }>(
      this.baseUrl + "/details/" + NID
    );
  }

  constructor(private http: HttpClient) {}
}
