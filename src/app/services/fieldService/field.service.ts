import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Field } from 'src/app/types/FieldType/field';
import { Fieldrequest } from 'src/app/types/FieldType/fieldrequest';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http : HttpClient) { }

  create(field : Field) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/field/create",field, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/fields")
  }

  getById(id : number) : Observable<any>{
    return this.http.get(ApiConfig.url+`/field/${id}`)
  }

  update(field : Fieldrequest){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/field/update",field, {headers})
  }

  delete(id : number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url+`/field/delete/${id}`,{headers})
  }
}
