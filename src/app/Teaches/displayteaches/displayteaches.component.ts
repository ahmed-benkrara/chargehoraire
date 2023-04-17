import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { TeachesService } from 'src/app/services/teachesService/teaches.service';
import { SemesterService } from 'src/app/services/semesterService/semester.service';
import { SessionService } from 'src/app/services/sessionService/session.service';
import { TypehService } from 'src/app/services/typehService/typeh.service';
import { YearService } from 'src/app/services/yearService/year.service';
import { Teaches } from 'src/app/types/TeachesType/teaches';
import { Teachesreal } from 'src/app/types/TeachesType/teachesreal';

interface mytype{
  professor : {
    id : number,
    name : string
  },
  module : {
    id : number,
    name : string
  },
  year : {
    id : number,
    name : string
  },
  semester : {
    id : number,
    name : string
  },
  session : {
    id : number,
    name : string
  },
  typeh : {
    id : number,
    name : string
  },
  hours : number
}

@Component({
  selector: 'app-displayteaches',
  templateUrl: './displayteaches.component.html',
  styleUrls: ['./displayteaches.component.css']
})
export class DisplayteachesComponent implements OnInit{

  tasks : Teachesreal[] = []
  teaches : mytype[] = []

  constructor(
    private moduleService: ModuleService,
    private professorService: ProfessorService,
    private teachesService: TeachesService,
    private semesterService: SemesterService,
    private sessionService: SessionService,
    private typehService: TypehService,
    private yearService: YearService
  ) {}

  p : number = 1
  itemsperpage : number = 25

  ngOnInit() : void {
    this.teachesService.read().subscribe(data => {
      this.tasks = data
      if(this.tasks.length > 0){
        this.tasks.forEach(item => {
          let profid : number = item.key.teacher_id
          let modid = item.key.module_id
          let yeart = item.key.year
          let sessionid = item.session.id
          let semesterid = item.semester.id
          let typehid = item.type.id
          let hours = item.hours

          this.professorService.getById(profid).subscribe(data => {
            let profname = data.firstName +" "+ data.lastName
            this.moduleService.getById(modid).subscribe(data => {
              let modname = data.name
              this.sessionService.getById(sessionid).subscribe(data => {
                let sessionname = data.name
                this.semesterService.getById(semesterid).subscribe(data => {
                  let semestername = data.name 
                  this.typehService.getById(typehid).subscribe(data => {
                    let typehname = data.name 
                      this.teaches.push({professor : {id : profid, name : profname}, module : { id : modid, name : modname }, year : { id : yeart.id, name : yeart.name }, hours, semester : { id : semesterid, name :  semestername}, session : { id : sessionid, name :  sessionname}, typeh : { id : typehid, name :  typehname}})
                  })
                })
              })
            })
          })
        })
      }
    })
  }

  delete(index : number,id : Teaches){
    if(confirm('are you sure you want to delete ?')){
      this.teachesService.delete(id).subscribe(
        (response) => {
          alert('Deleted successfully !')
          this.teaches.splice(index,1)
          if (this.p > 1) {
            this.p--;
          }
        },
        (err) => {alert("something went wrong please try again later !")}        
      )
    }
  }
}
