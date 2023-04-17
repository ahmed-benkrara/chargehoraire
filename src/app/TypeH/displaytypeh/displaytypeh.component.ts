import { Component, OnInit } from '@angular/core';
import { TypehService } from 'src/app/services/typehService/typeh.service';

interface typ {
  id: number,
  name: string
}

@Component({
  selector: 'app-displaytypeh',
  templateUrl: './displaytypeh.component.html',
  styleUrls: ['./displaytypeh.component.css']
})
export class DisplaytypehComponent implements OnInit{
  constructor(private typehService: TypehService){}

  data: typ[] = []
  p: number = 1
  itemsperpage: number = 25

  ngOnInit(): void {
    this.typehService.read().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  delete(id: number){
    if(confirm('Are you sure you want to delete this Typeh? Deleting it will cause deleting everything that has a value with it!')){
      this.typehService.delete(id).subscribe(
        (response) => {
        let index = this.data.findIndex(x => x.id == id)
        this.data.splice(index,1)
        alert('Deleted successfully!')
          if (this.p > 1) {
            this.p--;
          }
        },
        (err) => {alert("Something went wrong please try again later!")}
      )
    }
  }
}