import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/types/ProfessorType/professor';
import { ProfessorUpdate } from 'src/app/types/ProfessorType/professorUpdate';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http : HttpClient) { }

  create(professor : Professor) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(ApiConfig.url+"/teacher/register",professor, {headers})
  }

  read() : Observable<any>{
    return this.http.get(ApiConfig.url+"/teachers")
  }

  getById(id : number) : Observable<any>{
    return this.http.get(ApiConfig.url+`/teacher/${id}`)
  }

  update(professor : ProfessorUpdate){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url+"/teacher/update",professor, {headers})
  }

  delete(id : number){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url+`/teacher/delete/${id}`,{headers})
  }
}
