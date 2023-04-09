import { Component } from '@angular/core';
import { LoginService } from './../services/loginService/login.service';
import { Forgot } from './../types/ForgotType/forgot';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  forgot : Forgot = {
    email : '',
    route : ''
  }

  constructor(private loginService : LoginService){}

  search() : void{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailField = document.getElementById("email") as HTMLElement
    if(emailRegex.test(this.forgot.email)){
      this.validationStyle(emailField, false, "")
      this.forgot.route = window.location.origin+"/recover"

      //send validation email
      this.loginService.forgotPassword(this.forgot).subscribe(
        (response) => {
          alert(response.message)
        },
        (error) => {
          console.log(error.error.message)
        }
      )
    }else{
      this.validationStyle(emailField, true, "Email isn't valid !")
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
