import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/departmentService/department.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface dep{
  id : number,
  name : string
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private departmentService : DepartmentService, private route: ActivatedRoute, private router:Router){}

  department : dep = {
    id : 0,
    name : ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.departmentService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.department.id = response.id
            this.department.name = response.name
          }else{
            this.router.navigate(['/departments'])
          }
        }
      )
    })
  }

  update(){
    let name = document.getElementById("name") as HTMLElement
    if(this.department.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.departmentService.update(this.department).subscribe(
        (response) => {
          alert("updated succesfully !")
        },  
        (err) => {
          alert("something went wring please try again later !")
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
