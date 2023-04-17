import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { DepartmentService } from 'src/app/services/departmentService/department.service';
import { AdmintaskService } from 'src/app/services/admintaskService/admintask.service';
import { Admintaskreal } from 'src/app/types/AdmintaskType/admintaskreal';
import { Admintask } from 'src/app/types/AdmintaskType/admintask';

interface mytype{
  professor : {
    id : number,
    name : string
  },
  department : {
    id : number,
    name : string
  },
  year : {
    id : number,
    name : string
  },
  hours : number
}

@Component({
  selector: 'app-display-administatif',
  templateUrl: './display-administatif.component.html',
  styleUrls: ['./display-administatif.component.css']
})
export class DisplayAdministatifComponent implements OnInit{
  tasks : Admintaskreal[] = []
  admin : mytype[] = []

  constructor(
    private professorService:ProfessorService,
    private departmentService:DepartmentService,
    private admintaskService:AdmintaskService
  ){}

  p : number = 1
  itemsperpage : number = 25

  ngOnInit(): void {
    this.admintaskService.read().subscribe(data => {
      this.tasks = data
      if(this.tasks.length > 0){
        this.tasks.forEach(item => {
          let profid : number = item.key.teacher_id
          let depid = item.key.department_id
          let yeart = item.key.year
          let hours = item.hours
          this.professorService.getById(profid).subscribe(data => {
            let profname = data.firstName +" "+ data.lastName
            this.departmentService.getById(depid).subscribe(data => {
              this.admin.push({professor : {id : profid, name : profname}, department : { id : data.id, name : data.name }, year : { id : yeart.id, name : yeart.name }, hours})
            })
          })
        })
      }
    })

  }

  delete(index : number,id : Admintask){
    if(confirm('are you sure you want to delete ?')){
      this.admintaskService.delete(id).subscribe(
        (response) => {
          this.admin.splice(index,1)
          alert('Deleted successfully !')
          if (this.p > 1) {
            this.p--;
          }
        },
        (err) => {alert("something went wrong please try again later !")}        
      )
    }
  }

}
