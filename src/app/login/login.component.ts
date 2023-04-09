import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/loginService/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Login } from './../types/LoginType/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginInfo : Login = {
    email : '', 
    password: ''
  }

  constructor(private loginService : LoginService, private cookieService: CookieService){}

  ngOnInit(): void {
    document.addEventListener('keypress', (e) => {
      if(e.keyCode == 13){
        document.getElementById('login')?.click()
      }
    })
  }

  login(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailField = document.getElementById("email") as HTMLElement
    let passwordField = document.getElementById("password") as HTMLElement
    //validation
    if(emailRegex.test(this.loginInfo.email)){
      this.validationStyle(emailField, false, "")
      if(this.loginInfo.password.trim().length > 0){
        this.validationStyle(passwordField, false, "")

        //valiiiiiiiiiiiiiiiiiid send login request
        this.loginService.login(this.loginInfo).subscribe(
          (response) => {
            let date = new Date()
            date.setHours(date.getHours() + 24)
            this.cookieService.set('token', response.token, date)
          },
          (error) => {
            alert(error.error.message || "Connection failure !")
          }
        )

      }else{
        this.validationStyle(passwordField, true, "Password isn't valid")
      }
    }else{
      this.validationStyle(emailField, true, "Enter a valid email !")
    }
  }

  validationStyle(element : HTMLElement, error : boolean, message : string){
    if(element){
      if(!error){
        element.removeAttribute('style')
        element.removeAttribute('title')
      }else{
        element.style.borderColor = "red"
        element.setAttribute('title', message)
      }
    }
  }
}
