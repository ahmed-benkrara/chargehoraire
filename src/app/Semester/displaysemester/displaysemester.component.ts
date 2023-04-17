import { Component, OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semesterService/semester.service';

interface sem{
id : number,
name : string
}

@Component({
  selector: 'app-displaysemester',
  templateUrl: './displaysemester.component.html',
  styleUrls: ['./displaysemester.component.css']
})
export class DisplaysemesterComponent implements OnInit{
  constructor(private semesterService:SemesterService){}

  data : sem[] = []
  p : number = 1
  itemsperpage : number = 25

  ngOnInit(): void {
    this.semesterService.read().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this semester ? deleting it will cause deleting everything that has a value with it!')){
      this.semesterService.delete(id).subscribe(
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




