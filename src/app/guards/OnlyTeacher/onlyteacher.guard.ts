import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyteacherGuard implements CanActivate {
  constructor(private router: Router, private loginService : LoginService, private cookies : CookieService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const response = await this.loginService.getUserRole(this.cookies.get("token").split('.')[0])
      if(response.role){
        let role : string = ''
        role = response.role
        if(role.toLowerCase() == "teacher"){
          return true;
        }else{
          this.router.navigate(['/admin/dashboard'])
          return false;
        }
      }else{
        this.router.navigate(['/forbidden'])
        return false;
      }
  }
  
}
