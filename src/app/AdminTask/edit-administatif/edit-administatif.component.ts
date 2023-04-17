import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selector: 'app-edit-administatif',
  templateUrl: './edit-administatif.component.html',
  styleUrls: ['./edit-administatif.component.css']
})
export class EditAdministatifComponent implements OnInit{
  constructor(private professorService:ProfessorService,private yearService:YearService, private departmentService:DepartmentService,private admintaskService:AdmintaskService, private route: ActivatedRoute, private router:Router){}

  admintask : Admintask = {
    teacher_id : 0,
    department_id : 0, 
    year : '',
    hours : 0
  }

  departments : dep[] = []
  professors : prof[] = []
  years : year[] = []

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.admintask.teacher_id = params['id']
      this.admintask.year = params['year']
      this.admintask.department_id = params['department']
      this.admintaskService.getById(this.admintask).subscribe(
        (response) => {
          if(response != null){
            this.admintask.hours = response.hours
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
          }else{
            this.router.navigate(['/administratifs'])
          }
        }
      )
    })
  }

  update(){
    const hours = document.getElementById("hours") as HTMLElement
    const department = document.getElementById("department") as HTMLSelectElement
    const year = document.getElementById("year") as HTMLSelectElement

    if(this.admintask.hours == 0){
      this.validationStyle(hours,true,"Hours is required !")
    }else{
      this.validationStyle(hours,false,"")
      this.admintaskService.update(this.admintask).subscribe(
        (response) => {
          alert("updated successfully !")
        },
        (err) => {
          alert("oops something went wrong please try again later !")
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
