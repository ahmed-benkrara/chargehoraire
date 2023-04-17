import { Component } from '@angular/core';
import { Professor } from 'src/app/types/ProfessorType/professor';
import { ProfessorService } from 'src/app/services/professorService/professor.service';

@Component({
  selector: 'app-addprofessor',
  templateUrl: './addprofessor.component.html',
  styleUrls: ['./addprofessor.component.css']
})
export class AddprofessorComponent {
  constructor(private professorService : ProfessorService){}

  professor : Professor = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    cin : ''
  }

  create(){
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
            //create the prof
            this.professor.password = this.professor.cin
            this.professorService.create(this.professor).subscribe(
              (response) => {
                alert(response.message)
                this.professor.firstName = ''
                this.professor.lastName = ''
                this.professor.email = ''
                this.professor.password = ''
                this.professor.cin = ''
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
