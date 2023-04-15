import { Component, OnInit } from '@angular/core';
import { FieldService } from 'src/app/services/fieldService/field.service';
import { Field } from 'src/app/types/FieldType/field';
import { DepartmentService } from 'src/app/services/departmentService/department.service';

@Component({
  selector: 'app-addfield',
  templateUrl: './addfield.component.html',
  styleUrls: ['./addfield.component.css']
})
export class AddfieldComponent implements OnInit{
  constructor(private fieldService : FieldService, private departmentService : DepartmentService){}

  field : Field = {
    name : '',
    department_id : 0
  }

  departments : any = []

  ngOnInit(): void {
    this.departmentService.read().subscribe(
      (response) => {
        this.departments = response
        console.log(this.departments)
      }
    )
  }


  create(){
    const name = document.getElementById("name") as HTMLElement
    const department = document.getElementById("department") as HTMLSelectElement

    if(this.field.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      if(department.value == "" || department.value == null){
        //invalid
        this.validationStyle(department, true, "choosing a department is required !")
      }else{
        //valid
        this.validationStyle(department, false, "")
        this.field.department_id = parseInt(department.value)
        this.fieldService.create(this.field).subscribe(
          (response) => {
            alert(response.message)
            this.field.name = ''
          },  
          (err) => {
            alert(err.error.message)
          }
        )
      }
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
