import { Component, OnInit } from '@angular/core';
import { TypehService } from 'src/app/services/typehService/typeh.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface typ{
  id : number,
  name : string
}

@Component({
  selector: 'app-edittypeh',
  templateUrl: './edittypeh.component.html',
  styleUrls: ['./edittypeh.component.css']
})
export class EdittypehComponent implements OnInit{

  constructor(private typehService : TypehService, private route: ActivatedRoute, private router:Router){}

  typeh : typ = {
    id : 0,
    name : ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.typehService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.typeh.id = response.id
            this.typeh.name = response.name
          }else{
            this.router.navigate(['/typehs'])
          }
        }
      )
    })
  }

  update(){
    let name = document.getElementById("name") as HTMLElement
    if(this.typeh.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.typehService.update(this.typeh).subscribe(
        (response) => {
          alert("updated succesfully !")
        },
        (err) => {
          alert("something went wrong please try again later !")
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