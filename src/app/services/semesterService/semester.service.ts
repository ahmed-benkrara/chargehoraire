import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Semester } from './../../types/SemesterType/semester';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private http: HttpClient) { }

  create(semester: Semester): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url + "/semester/create", semester, { headers });
  }

  read(): Observable<any> {
    return this.http.get(ApiConfig.url + "/semesters");
  }

  getById(id: number): Observable<any> {
    return this.http.get(ApiConfig.url + `/semester/${id}`);
  }

  update(semester: { id: number, name: string }) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url + "/semester/update", semester, { headers });
  }

  delete(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url + `/semester/delete/${id}`, { headers });
  }
}
