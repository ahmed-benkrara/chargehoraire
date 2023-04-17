import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessionService/session.service';

interface ses{
  id : number,
  name : string
}

@Component({
  selector: 'app-displaysession',
  templateUrl: './displaysession.component.html',
  styleUrls: ['./displaysession.component.css']
})
export class DisplaysessionComponent implements OnInit{
  constructor(private sessionService:SessionService){}

  data : ses[] = []
  p : number = 1
  itemsperpage : number = 25

  ngOnInit(): void {
    this.sessionService.read().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  delete(id : number){
    if(confirm('are you sure you want to delete this session ? deleting it will cause deleting everything that has a value with it!')){
      this.sessionService.delete(id).subscribe(
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