import { Component } from '@angular/core';
import { Login } from './../types/LoginType/login';
import { LoginService } from '../services/loginService/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {
  
  login : Login = {
    email : '',
    password : ''
  }

  confirm : string = ''
  
  constructor(private loginService : LoginService, private route : ActivatedRoute, private router : Router){}


  recover(){
    let password = document.getElementById("password") as HTMLElement
    let confirmField = document.getElementById("confirm") as HTMLElement

    if(this.login.password.trim().length > 0){
      this.validationStyle(password, false, "")
      if(this.confirm == this.login.password){
        //valid, send request
        this.validationStyle(confirmField, false, "")
        this.route.paramMap.subscribe((val) => {
          if(val.has('email')){
            this.login.email = val.get('email') as string
            this.loginService.setNewPassword(this.login).subscribe(
              (response) => {
                this.router.navigate(['/login'])
              },
              (error) => {
                if(error.error){
                  alert(error.error)
                }
              }
            )
          }
        })
      }else{
        this.validationStyle(confirmField, true, "Passwords aren't the same !")
      }
    }else{
      this.validationStyle(password, true, "Enter a password")
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
