import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { TeachesService } from 'src/app/services/teachesService/teaches.service';
import { SemesterService } from 'src/app/services/semesterService/semester.service';
import { SessionService } from 'src/app/services/sessionService/session.service';
import { TypehService } from 'src/app/services/typehService/typeh.service';
import { YearService } from 'src/app/services/yearService/year.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selector: 'app-editteaches',
  templateUrl: './editteaches.component.html',
  styleUrls: ['./editteaches.component.css']
})
export class EditteachesComponent {

  constructor(
    private teachesService:TeachesService,
    private moduleService:ModuleService,
    private professorService:ProfessorService,
    private yearService:YearService,
    private sessionService:SessionService,
    private semesterService:SemesterService,
    private typehService:TypehService,
    private route: ActivatedRoute, 
    private router:Router
  ){}

  task : Teaches = {
    teacher_id : 0,
    module_id : 0, 
    year : '',
    semester : '',
    session : '',
    typeh : '',
    hours : 0
  }

  modules : mod[] = []
  professors : prof[] = []
  years : mod[] = []
  semesters : mod[] = []
  sessions : mod[] = []
  types : mod[] = []


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.task.teacher_id = params['id']
      this.task.year = params['year']
      this.task.module_id = params['module']
      console.log(this.task)
      this.teachesService.getById(this.task).subscribe(
        (response) => {
          if(response != null){
            console.log(response)
            this.task.hours = response.hours
            this.task.semester = response.semester.name
            this.task.session = response.session.name
            this.task.typeh = response.type.name
          }else{
            this.router.navigate(['/teaches'])
          } 
        },
        (err) => {
          this.router.navigate(['/teaches'])
        }
      )
    })

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


  update(){
    const hours = document.getElementById("hours") as HTMLElement
    const semester = document.getElementById("semester") as HTMLSelectElement
    const session = document.getElementById("session") as HTMLSelectElement
    const typeh = document.getElementById("typeh") as HTMLSelectElement

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
          if(this.task.hours == 0){
            this.validationStyle(hours,true,"Hours is required !")
          }else{
            this.validationStyle(hours,false,"")
            this.task.semester = semester.value
            this.task.session = session.value
            this.task.typeh = typeh.value
            this.teachesService.update(this.task).subscribe(
              (response) => {
                alert("updated successfully !")
              },
              (err) => {
                alert("oops something went wrong please try again later !")
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
