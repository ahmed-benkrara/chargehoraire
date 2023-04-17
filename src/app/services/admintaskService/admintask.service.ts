import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Admintask } from 'src/app/types/AdmintaskType/admintask';

@Injectable({
  providedIn: 'root'
})
export class AdmintaskService {

  constructor(private http : HttpClient) { }

  create(admintask : Admintask) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/administrative/create",admintask, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/administratives")
  }

  getById(admintask : Admintask) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+`/administrative/get`,admintask,{headers})
  }

  update(admintask : Admintask){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/administrative/update",admintask, {headers})
  }

  delete(admintask : Admintask){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+`/administrative/delete`,admintask,{headers})
  }
}
