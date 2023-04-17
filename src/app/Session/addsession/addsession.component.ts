import { Component } from '@angular/core';
import { Session } from 'src/app/types/SessionType/session';
import { SessionService } from 'src/app/services/sessionService/session.service';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent {
  session : Session = {
    name : ''
    }
    
    constructor(private sessionService: SessionService){}
    
    create(){
      let name = document.getElementById("name") as HTMLElement
      if(this.session.name.trim().length == 0){
        //invalid
        this.validationStyle(name, true, "name isn't valid")
      }else{
        this.validationStyle(name, false, "")
        this.sessionService.create(this.session).subscribe(
          (response) => {
            alert(response.message)
            this.session.name = ''
          },
          (err) => {
            alert(err.error.message)
          }
        )
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
