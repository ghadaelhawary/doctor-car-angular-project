import { Injectable } from "@angular/core";
import { Supervisor } from "../../_Models/supervisor/supervisor";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class SuperserService {

  baseUrl: string =  `${ environment.baseUrl }/admin/supervisor`;

  Url: string = `${ environment.baseUrl }/admin/clinic/supervisor/add`;


  AddSuper(_id: any, supervisor: Supervisor): Observable<{ status: number }> {
    return this.http.post<{ status: number }>(this.Url + "/" + _id, supervisor);
  }

  getAllsuper() {
    return this.http.get<Supervisor[]>(this.baseUrl);
  }
  deletesuper(NID: number): Observable<Supervisor> {
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      body: {
        NID: NID
      }
    };
    return this.http.delete<Supervisor>(this.baseUrl, options);
  }
  // AddSuper(sup:Supervisor){
  //  return this.http.post<Supervisor>(this.baseUrl,sup)
  // }
  updateSuper(sup: Supervisor) {
    return this.http.put<Supervisor>(this.baseUrl, sup);
  }
  getSupervisordetails(
    NID: number
  ): Observable<{ status: number; data: Supervisor }> {
    return this.http.get<{ status: number; data: Supervisor }>(
      this.baseUrl + "/details/" + NID
    );
  }

  constructor(private http: HttpClient) {}
}
