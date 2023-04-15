import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Department } from './../../types/DepartmentType/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient) { }

  create(department : Department) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/department/create",department, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/departments")
  }

  getById(id : number) : Observable<any>{
    return this.http.get(ApiConfig.url+`/department/${id}`)
  }

  update(department : {id :number, name : string}){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/department/update",department, {headers})
  }

  delete(id : number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url+`/department/delete/${id}`,{headers})
  }
}
