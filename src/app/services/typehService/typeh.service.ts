import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from 'src/app/Config/api-config';
import { Observable } from 'rxjs';
import { Typeh } from './../../types/TypehType/typeh';

@Injectable({
providedIn: 'root'
})
export class TypehService {

constructor(private http: HttpClient) { }

create(typeh: Typeh): Observable<any> {
const headers = new HttpHeaders().set('Content-Type', 'application/json');
return this.http.post(ApiConfig.url + "/typeh/create", typeh, { headers });
}

read(): Observable<any> {
return this.http.get(ApiConfig.url + "/typehs");
}

getById(id: number): Observable<any> {
return this.http.get(ApiConfig.url + `/typeh/${id}`);
}

update(typeh: { id: number, name: string }) {
const headers = new HttpHeaders().set('Content-Type', 'application/json');
return this.http.put(ApiConfig.url + "/typeh/update", typeh, { headers });
}

delete(id: number) {
const headers = new HttpHeaders().set('Content-Type', 'application/json');
return this.http.delete(ApiConfig.url + `/typeh/delete/${id}`, { headers });
}
}