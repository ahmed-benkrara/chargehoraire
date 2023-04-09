import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './../../services/loginService/login.service';
import { Emailtoken } from 'src/app/types/EmailTokenType/emailtoken';

@Injectable({
  providedIn: 'root'
})
export class EmailtokenGuard implements CanActivate {
  constructor(private router : Router, private loginService : LoginService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const emailtoken: Emailtoken = {
      email: route.params['email'],
      token: route.params['token']
    };
  
    try {
      const isValid = await this.loginService.emailToken(emailtoken);
      if (isValid) {
        return true;
      } else {
        this.router.navigate(['/forbidden'])
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  
  
}
