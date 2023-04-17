import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Teaches } from 'src/app/types/TeachesType/teaches';

@Injectable({
  providedIn: 'root'
})
export class TeachesService {

  constructor(private http : HttpClient) { }

  create(teaches : Teaches) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/teaches/create",teaches, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/teaches")
  }

  getById(teaches : Teaches) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+`/teaches/get`,teaches,{headers})
  }

  update(teaches : Teaches){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/teaches/update",teaches, {headers})
  }

  delete(teaches : Teaches){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+`/teaches/delete`,teaches,{headers})
  }
}
