import { Component } from '@angular/core';
import { Department } from 'src/app/types/DepartmentType/department';
import { DepartmentService } from 'src/app/services/departmentService/department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  department : Department = {
    name : ''
  }

  constructor(private departmentService:DepartmentService){}

  create(){
    let name = document.getElementById("name") as HTMLElement
    if(this.department.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.departmentService.create(this.department).subscribe(
        (response) => {
          alert(response.message)
          this.department.name = ''
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
