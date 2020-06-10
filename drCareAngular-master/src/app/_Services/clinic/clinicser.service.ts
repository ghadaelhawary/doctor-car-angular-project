import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Clinic } from "../../_Models/clinic/clinic";
import { Observable } from "rxjs";
import { from } from "rxjs";
import { Doctor } from "src/app/_Models/doctor/doctor";
import { Supervisor } from "src/app/_Models/supervisor/supervisor";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class ClinicserService {
  
  baseUrl: string = `${environment.baseUrl}/admin/clinic`;


  getClinic(): Observable<{ status: number; data: Clinic[] }> {
    return this.http.get<{ status: number; data: Clinic[] }>(this.baseUrl);
  }
  deleteClinic(_id: number): Observable<Clinic> {
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      body: {
        _id: _id
      }
    };
    return this.http.delete<Clinic>(this.baseUrl, options);
  }
  AddClinic(cli: Clinic): Observable<{ status: number; doctorData: Clinic }> {
    return this.http.post<{ status: number; doctorData: Clinic }>(
      this.baseUrl,
      cli
    );
  }
  updateClinic(cli: Clinic) {
    return this.http.put<{ status: number }>(this.baseUrl, cli);
  }

  getClinicInfo(_id: any): Observable<{ status: number; data: Clinic }> {
    return this.http.get<{ status: number; data: Clinic }>(
      this.baseUrl + "/details/" + _id
    );
  }

  getClinicdetails(x: string, _id: any) {
    return this.http.get<Clinic[]>(this.baseUrl + "/details/" + _id + "/" + x);
  }

  constructor(private http: HttpClient) {}
}
