import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/types/ModuleType/module';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { FieldService } from 'src/app/services/fieldService/field.service';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit{
  constructor(private fieldService : FieldService, private moduleService : ModuleService){}

  module : Module = {
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
  }


  create(){
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
        this.moduleService.create(this.module).subscribe(
          (response) => {
            alert(response.message)
            this.module.name = ''
          },  
          (err) => {
            alert(err.error.message)
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
