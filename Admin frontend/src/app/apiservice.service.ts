import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect front end to backend
  apiUrl = 'http://localhost:8000/movies';

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  createData(data:any):Observable<any>{
    console.log(data,'createapi =>')
    return this._http.post(`${this.apiUrl}`,data)
  }
}
