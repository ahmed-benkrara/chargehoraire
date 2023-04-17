import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { TeachesService } from 'src/app/services/teachesService/teaches.service';
import { SemesterService } from 'src/app/services/semesterService/semester.service';
import { SessionService } from 'src/app/services/sessionService/session.service';
import { TypehService } from 'src/app/services/typehService/typeh.service';
import { YearService } from 'src/app/services/yearService/year.service';
import { Teaches } from 'src/app/types/TeachesType/teaches';

interface prof{
  id : number,
  firstName : string,
  lastName : string,
  cin : string,
  email : string
}

interface mod{
  id : number,
  name : string
}

@Component({
  selector: 'app-addteaches',
  templateUrl: './addteaches.component.html',
  styleUrls: ['./addteaches.component.css']
})
export class AddteachesComponent implements OnInit{

  constructor(
    private teachesService:TeachesService,
    private moduleService:ModuleService,
    private professorService:ProfessorService,
    private yearService:YearService,
    private sessionService:SessionService,
    private semesterService:SemesterService,
    private typehService:TypehService
  ){}

  modules : mod[] = []
  professors : prof[] = []
  years : mod[] = []
  semesters : mod[] = []
  sessions : mod[] = []
  types : mod[] = []
  hours : number = 0

  ngOnInit(): void {
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

    this.moduleService.read().subscribe(
      (response) => {
          this.modules = response
      }
    )

    this.semesterService.read().subscribe(
      (response) => {
          this.semesters = response
      }
    )

    this.sessionService.read().subscribe(
      (response) => {
          this.sessions = response
      }
    )

    this.typehService.read().subscribe(
      (response) => {
          this.types = response
      }
    )
  }


  create(){
    const hours = document.getElementById("hours") as HTMLElement
    const module = document.getElementById("module") as HTMLSelectElement
    const professor = document.getElementById("professor") as HTMLSelectElement
    const year = document.getElementById("year") as HTMLSelectElement
    const semester = document.getElementById("semester") as HTMLSelectElement
    const session = document.getElementById("session") as HTMLSelectElement
    const typeh = document.getElementById("typeh") as HTMLSelectElement

    if(professor.value == "" || professor.value == null){
      this.validationStyle(professor,true,"choosing a professor is required !")
    }else{
      this.validationStyle(professor,false,"")
      if(module.value == "" || module.value == null){
        this.validationStyle(module,true,"choosing a module is required !")
      }else{
        this.validationStyle(module,false,"")
        if(year.value == "" || year.value == null){
          this.validationStyle(year,true,"choosing a year is required !")
        }else{
          this.validationStyle(year,false,"")
          if(semester.value == "" || semester.value == null){
            this.validationStyle(semester,true,"Semester is required !")
          }else{
            this.validationStyle(semester,false,"")
            if(session.value == "" || session.value == null){
              this.validationStyle(session,true,"Session is required !")
            }else{
              this.validationStyle(session,false,"")
              if(typeh.value == "" || typeh.value == null){
                this.validationStyle(typeh,true,"Type is required !")
              }else{
                this.validationStyle(typeh,false,"")
                if(this.hours == 0){
                  this.validationStyle(hours,true,"Hours is required !")
                }else{
                  this.validationStyle(hours,false,"")
                  let data : Teaches = {
                    teacher_id : parseInt(professor.value),
                    module_id : parseInt(module.value), 
                    year : year.value,
                    hours : this.hours,
                    semester : semester.value,
                    session : session.value,
                    typeh : typeh.value
                  }
                  this.teachesService.create(data).subscribe(
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
