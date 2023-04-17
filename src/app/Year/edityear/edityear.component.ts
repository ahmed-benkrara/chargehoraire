import { Component, OnInit } from '@angular/core';
import { YearService } from 'src/app/services/yearService/year.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface year{
  id : number,
  name : string
}

@Component({
  selector: 'app-edityear',
  templateUrl: './edityear.component.html',
  styleUrls: ['./edityear.component.css']
})
export class EdityearComponent implements OnInit{

  constructor(private yearService : YearService, private route: ActivatedRoute, private router:Router){}

  year : year = {
    id : 0,
    name : ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.yearService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.year.id = response.id
            this.year.name = response.name
          }else{
            this.router.navigate(['/years'])
          }
        }
      )
    })
  }

  update(){
    let name = document.getElementById("name") as HTMLElement
    if(this.year.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      this.yearService.update(this.year).subscribe(
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