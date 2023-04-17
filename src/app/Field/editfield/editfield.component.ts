import { Component, OnInit } from '@angular/core';
import { FieldService } from 'src/app/services/fieldService/field.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Fieldrequest } from 'src/app/types/FieldType/fieldrequest';
import { DepartmentService } from 'src/app/services/departmentService/department.service';

@Component({
  selector: 'app-editfield',
  templateUrl: './editfield.component.html',
  styleUrls: ['./editfield.component.css']
})
export class EditfieldComponent implements OnInit{
  constructor(private fieldService : FieldService, private departmentService : DepartmentService, private route: ActivatedRoute, private router:Router){}

  field : Fieldrequest = {
    id : 0,
    name : '',
    department_id : 0
  }

  departments : any = []

  ngOnInit(): void {
    this.departmentService.read().subscribe(
      (response) => {
        this.departments = response
      }
    )

    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.fieldService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.field.id = response.id
            this.field.name = response.name
            this.field.department_id = response.department.id
          }else{
            this.router.navigate(['/fields'])
          }
        }
      )
    })
  }

  update(){
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
        this.fieldService.update(this.field).subscribe(
          (response) => {
            alert("updated succesfully !")
          },  
          (err) => {
            alert("something went wrong please try again later !")
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
