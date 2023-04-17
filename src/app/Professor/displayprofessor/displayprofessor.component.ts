import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professorService/professor.service';

interface prof{
  id : number,
  firstName : string,
  lastName : string,
  cin : string,
  email : string
}

@Component({
  selector: 'app-displayprofessor',
  templateUrl: './displayprofessor.component.html',
  styleUrls: ['./displayprofessor.component.css']
})
export class DisplayprofessorComponent implements OnInit{
  constructor(private professorService:ProfessorService){}

  data : prof[] = []
  p : number = 1
  itemsperpage : number = 25

  ngOnInit(): void {
    this.professorService.read().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this professor ? deleting it will cause deleting everything that has a value with it!')){
      this.professorService.delete(id).subscribe(
        (response) => {
          let index = this.data.findIndex(x => x.id == id)
          this.data.splice(index,1)
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
