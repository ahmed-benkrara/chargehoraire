import { Component } from '@angular/core';
import { Year } from 'src/app/types/YearType/year';
import { YearService } from 'src/app/services/yearService/year.service';

@Component({
  selector: 'app-addyear', 
  templateUrl: './addyear.component.html', 
  styleUrls: ['./addyear.component.css'] 
})
export class AddyearComponent {
  year : Year = { 
    name : ''
  }

  constructor(private yearService: YearService){}

  create(){
    let name = document.getElementById("name") as HTMLElement
    if(this.year.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.yearService.create(this.year).subscribe(
      (response) => {
      alert(response.message)
      this.year.name = ''
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