import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Session } from './../../types/SessionType/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  create(session: Session): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url + "/session/create", session, { headers });
  }

  read(): Observable<any> {
    return this.http.get(ApiConfig.url + "/sessions");
  }

  getById(id: number): Observable<any> {
    return this.http.get(ApiConfig.url + `/session/${id}`);
  }

  update(session: { id: number, name: string }) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(ApiConfig.url + "/session/update", session, { headers });
  }

  delete(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(ApiConfig.url + `/session/delete/${id}`, { headers });
  }
}
