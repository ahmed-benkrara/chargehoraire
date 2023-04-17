import { Component, OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semesterService/semester.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface sem{
id : number,
name : string
}

@Component({
  selector: 'app-editsemester',
  templateUrl: './editsemester.component.html',
  styleUrls: ['./editsemester.component.css']
})
export class EditsemesterComponent {

constructor(private semesterService : SemesterService, private route: ActivatedRoute, private router:Router){}

  semester : sem = {
  id : 0,
  name : ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.semesterService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.semester.id = response.id
            this.semester.name = response.name
          }else{
            this.router.navigate(['/semesters'])
          }
        }
      )
    })
  }

  update(){
    let name = document.getElementById("name") as HTMLElement
    if(this.semester.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.semesterService.update(this.semester).subscribe(
        (response) => {
          alert("updated succesfully !")
        },
        (err) => {
          alert("something went wrong please try again later !")
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
