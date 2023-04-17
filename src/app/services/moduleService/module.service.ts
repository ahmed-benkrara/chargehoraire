import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Module } from 'src/app/types/ModuleType/module';
import { Modulerequest } from 'src/app/types/ModuleType/modulerequest';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http : HttpClient) { }

  create(module : Module) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/module/create",module, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/modules")
  }

  getById(id : number) : Observable<any>{
    return this.http.get(ApiConfig.url+`/module/${id}`)
  }

  update(module : Modulerequest){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/module/update",module, {headers})
  }

  delete(id : number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url+`/module/delete/${id}`,{headers})
  }
}
