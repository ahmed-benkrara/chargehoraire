import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Modulerequest } from 'src/app/types/ModuleType/modulerequest';
import { FieldService } from 'src/app/services/fieldService/field.service';

@Component({
  selector: 'app-editmodule',
  templateUrl: './editmodule.component.html',
  styleUrls: ['./editmodule.component.css']
})
export class EditmoduleComponent implements OnInit{
  constructor(private fieldService : FieldService, private moduleService : ModuleService, private route: ActivatedRoute, private router:Router){}

  module : Modulerequest = {
    id : 0,
    name : '',
    field_id : 0
  }

  fields : any = []

  ngOnInit(): void {
    this.fieldService.read().subscribe(
      (response) => {
        this.fields = response
      }
    )

    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.moduleService.getById(id).subscribe(
        (response) => {
          if(response != null){
            this.module.id = response.id
            this.module.name = response.name
            this.module.field_id = response.field.id
          }else{
            this.router.navigate(['/modules'])
          }
        }
      )
    })
  }

  update(){
    const name = document.getElementById("name") as HTMLElement
    const fields = document.getElementById("field") as HTMLSelectElement

    if(this.module.name.trim().length == 0){
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    }else{
      this.validationStyle(name, false, "")
      if(fields.value == "" || fields.value == null){
        //invalid
        this.validationStyle(fields, true, "choosing a field is required !")
      }else{
        //valid
        this.validationStyle(fields, false, "")
        this.module.field_id = parseInt(fields.value)
        this.moduleService.update(this.module).subscribe(
          (response) => {
            alert("updated succesfully !")
          },  
          (err) => {
            alert("something went wrong please try again later !")
          }
        )
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
