import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from 'src/app/Config/api-config';
import { Login } from './../../types/LoginType/login';
import { Forgot } from './../../types/ForgotType/forgot';
import { Emailtoken } from './../../types/EmailTokenType/emailtoken';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient) { }

  login(login : Login) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/login",login, {headers});
  }

  forgotPassword(forgot : Forgot) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/forgot",forgot, {headers});
  }

  //recover
  async emailToken(emailtoken : Emailtoken) : Promise<boolean>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    try{
      const response = await this.http.post(ApiConfig.url+"/isEmailTokenValid",emailtoken, {headers}).toPromise()
      return true
    }catch(err){
      return false
    }
  }

  //recover new pass
  setNewPassword(login : Login) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(ApiConfig.url+"/setNewPassword",login, {headers});
  }

  async isAuth(token : any) : Promise<boolean>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    try{
      await this.http.post(ApiConfig.url+"/verifyAuth",token, {headers}).toPromise()
      return true
    }catch(err){
      return false
    }
  }

  //get user role
  async getUserRole(email : string) : Promise<any>{
    try{
      const role = await this.http.get(ApiConfig.url+"/getRole/"+email).toPromise()
      return role
    }catch(err){
      return null
    }
  }
}
