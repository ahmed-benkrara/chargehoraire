import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/departmentService/department.service';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { AdmintaskService } from 'src/app/services/admintaskService/admintask.service';
import { YearService } from 'src/app/services/yearService/year.service';
import { Admintask } from 'src/app/types/AdmintaskType/admintask';

interface prof{
  id : number,
  firstName : string,
  lastName : string,
  cin : string,
  email : string
}

interface dep{
  id : number,
  name : string
}

interface year{
  id : number,
  name : string
}

@Component({
  selector: 'app-add-administatif',
  templateUrl: './add-administatif.component.html',
  styleUrls: ['./add-administatif.component.css']
})
export class AddAdministatifComponent implements OnInit{
  constructor(
    private admintaskService:AdmintaskService,
    private departmentService:DepartmentService,
    private professorService:ProfessorService,
    private yearService:YearService
  ){}

  departments : dep[] = []
  professors : prof[] = []
  years : year[] = []

  hours : number = 0

  ngOnInit(): void {

    this.departmentService.read().subscribe(
      (response) => {
        this.departments = response
      }
    )

    this.professorService.read().subscribe(
      (response) => {
        this.professors = response
      }
    )

    this.yearService.read().subscribe(
      (response) => {
          this.years = response
      }
    )

  }

  create(){
    const hours = document.getElementById("hours") as HTMLElement
    const department = document.getElementById("department") as HTMLSelectElement
    const professor = document.getElementById("professor") as HTMLSelectElement
    const year = document.getElementById("year") as HTMLSelectElement

    if(professor.value == "" || professor.value == null){
      this.validationStyle(professor,true,"choosing a professor is required !")
    }else{
      this.validationStyle(professor,false,"")
      if(department.value == "" || department.value == null){
        this.validationStyle(department,true,"choosing a department is required !")
      }else{
        this.validationStyle(department,false,"")
        if(year.value == "" || year.value == null){
          this.validationStyle(year,true,"choosing a year is required !")
        }else{
          this.validationStyle(year,false,"")
          if(this.hours == 0){
            this.validationStyle(hours,true,"Hours is required !")
          }else{
            this.validationStyle(hours,false,"")
            let data : Admintask = {
              teacher_id : parseInt(professor.value),
              department_id : parseInt(department.value), 
              year : year.value,
              hours : this.hours
            }
            this.admintaskService.create(data).subscribe(
              (response) => {
                alert(response.message)
                this.hours = 0
              },
              (err) => {
                alert(err.error.message)
              }
            )
          }
        }
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
