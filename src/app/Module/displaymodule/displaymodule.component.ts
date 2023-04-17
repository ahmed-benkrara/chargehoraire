import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';

@Component({
  selector: 'app-displaymodule',
  templateUrl: './displaymodule.component.html',
  styleUrls: ['./displaymodule.component.css']
})
export class DisplaymoduleComponent implements OnInit{
  constructor(private moduleService:ModuleService){}

  data : any = []
  p : number = 1
  itemsperpage : number = 25

  ngOnInit(): void {
    this.moduleService.read().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this module ?')){
      this.moduleService.delete(id).subscribe(
        (response) => {
          let index = this.data.findIndex((item : any) => item.id == id)
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
