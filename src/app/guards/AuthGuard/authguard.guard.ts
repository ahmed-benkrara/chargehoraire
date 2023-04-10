import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private cookies : CookieService, private loginService : LoginService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>{

    if(this.cookies.check("token")){
      const token = {token : this.cookies.get("token")}
      const isAuth = await this.loginService.isAuth(token)
      if(isAuth){
        return true
      }else{
        this.router.navigate(['/login'])//should be login
        return false
      }
    }else{
      //not auth
      this.router.navigate(['/login'])//should be login
      return false
    }
  }
  
}
