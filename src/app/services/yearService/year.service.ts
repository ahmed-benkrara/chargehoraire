import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Year } from './../../types/YearType/year';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(private http: HttpClient) { }

  create(year: Year): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url + "/year/create", year, { headers });
  }

  read(): Observable<any> {
    return this.http.get(ApiConfig.url + "/years");
  }

  getById(id: number): Observable<any> {
    return this.http.get(ApiConfig.url + `/year/${id}`);
  }

  update(year: { id: number, name: string }) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url + "/year/update", year, { headers });
  }

  delete(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url + `/year/delete/${id}`, { headers });
  }
}
