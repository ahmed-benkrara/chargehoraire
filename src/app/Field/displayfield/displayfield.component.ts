import { Component } from '@angular/core';
import { FieldService } from 'src/app/services/fieldService/field.service';

@Component({
  selector: 'app-displayfield',
  templateUrl: './displayfield.component.html',
  styleUrls: ['./displayfield.component.css']
})
export class DisplayfieldComponent {
  constructor(private fieldService:FieldService){}

  data : any = []
  p : number = 1
  itemsperpage : number = 1

  ngOnInit(): void {
    this.fieldService.read().subscribe(
      (response) => {
        this.data = response
        console.log(this.data)
      }
    )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this field ?')){
      this.fieldService.delete(id).subscribe(
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
