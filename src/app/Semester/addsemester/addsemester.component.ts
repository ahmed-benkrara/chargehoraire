import { Component } from '@angular/core';
import { Semester } from 'src/app/types/SemesterType/semester';
import { SemesterService } from 'src/app/services/semesterService/semester.service';

@Component({
  selector: 'app-addsemester',
  templateUrl: './addsemester.component.html',
  styleUrls: ['./addsemester.component.css']
})
export class AddsemesterComponent {
  semester : Semester = {
    name : ''
    }
    
    constructor(private semesterService: SemesterService){}
    
    create(){
      let name = document.getElementById("name") as HTMLElement
      if(this.semester.name.trim().length == 0){
        //invalid
        this.validationStyle(name, true, "name isn't valid")
      }else{
        this.validationStyle(name, false, "")
        this.semesterService.create(this.semester).subscribe(
          (response) => {
            alert(response.message)
            this.semester.name = ''
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
