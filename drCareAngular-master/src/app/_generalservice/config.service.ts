import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url:string = '../assets/data.json';
  flag = 1;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}
