import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfessorUpdate } from 'src/app/types/ProfessorType/professorUpdate';

@Component({
  selector: 'app-editprofessor',
  templateUrl: './editprofessor.component.html',
  styleUrls: ['./editprofessor.component.css']
})
export class EditprofessorComponent implements OnInit{
  constructor(private professorService : ProfessorService, private route: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.professorService.getById(id).subscribe(
        (response) => {
          console.log('s')
          if(response != null){
            this.professor.id = response.id
            this.professor.firstName = response.firstName
            this.professor.lastName = response.lastName
            this.professor.email = response.email
            this.professor.cin = response.cin
          }else{
            this.router.navigate(['/professors'])
          }
        }
      )
    })
  }

  professor : ProfessorUpdate = {
    id : 0,
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    cin : ''
  }



  update(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let fname = document.getElementById("fname") as HTMLElement
    let lname = document.getElementById("lname") as HTMLElement
    let email = document.getElementById("email") as HTMLElement
    let cin = document.getElementById("cin") as HTMLElement

    if(this.professor.firstName.trim().length == 0){
      this.validationStyle(fname, true, "first name isn't valid")
    }else{
      this.validationStyle(fname, false, "")
      if(this.professor.lastName.trim().length == 0){
        this.validationStyle(lname, true, "last name isn't valid")
      }else{
        this.validationStyle(lname, false, "")
        if(!emailRegex.test(this.professor.email)){
          this.validationStyle(email, true, "email isn't valid")
        }else{
          this.validationStyle(email, false, "")
          if(this.professor.cin.trim().length < 4){
            this.validationStyle(cin, true, "cin isn't valid")
          }else{
            this.validationStyle(cin, false, "")
            //everything is valid
            this.professorService.update(this.professor).subscribe(
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
