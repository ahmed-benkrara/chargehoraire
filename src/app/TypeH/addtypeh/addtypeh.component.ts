import { Component } from '@angular/core';
import { Typeh } from 'src/app/types/TypehType/typeh';
import { TypehService } from 'src/app/services/typehService/typeh.service';

@Component({
  selector: 'app-addtypeh',
  templateUrl: './addtypeh.component.html',
  styleUrls: ['./addtypeh.component.css']
})
export class AddtypehComponent {
  typeh: Typeh = {
    name: ''
  }

  constructor(private typehService: TypehService){}

  create(){
    let name = document.getElementById("name") as HTMLElement
    if(this.typeh.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.typehService.create(this.typeh).subscribe(
        (response) => {
          alert(response.message)
          this.typeh.name = ''
        },
        (err) => {
          alert(err.error.message)
        }
      )
    }
  }

  validationStyle(element: HTMLElement, error: boolean, message: string){
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