import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/departmentService/department.service';

interface dep{
  id : number,
  name : string
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  constructor(private departmentService:DepartmentService){}

  data : dep[] = []
  p : number = 1
  itemsperpage : number = 1

  ngOnInit(): void {
    this.departmentService.read().subscribe(
      (response) => {
        this.data = response
      }
      )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this department ? deleting it will cause deleting everything that has a value with it!')){
      this.departmentService.delete(id).subscribe(
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
