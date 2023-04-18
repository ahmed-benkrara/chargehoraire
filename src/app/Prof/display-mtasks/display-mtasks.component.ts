import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/services/moduleService/module.service';
import { ProfessorService } from 'src/app/services/professorService/professor.service';
import { TeachesService } from 'src/app/services/teachesService/teaches.service';
import { SemesterService } from 'src/app/services/semesterService/semester.service';
import { SessionService } from 'src/app/services/sessionService/session.service';
import { TypehService } from 'src/app/services/typehService/typeh.service';
import { YearService } from 'src/app/services/yearService/year.service';
import { Teaches } from 'src/app/types/TeachesType/teaches';
import { Teachesreal } from 'src/app/types/TeachesType/teachesreal';
import { Typeh } from 'src/app/types/TypehType/typeh';
import { LoginService } from 'src/app/services/loginService/login.service';
import { CookieService } from 'ngx-cookie-service';

interface mytype{
  professor : {
    id : number,
    name : string
  },
  module : {
    id : number,
    name : string
  },
  year : {
    id : number,
    name : string
  },
  semester : {
    id : number,
    name : string
  },
  session : {
    id : number,
    name : string
  },
  typeh : {
    id : number,
    name : string
  },
  hours : number
}

@Component({
  selector: 'app-display-mtasks',
  templateUrl: './display-mtasks.component.html',
  styleUrls: ['./display-mtasks.component.css']
})
export class DisplayMTasksComponent implements OnInit{

  tasks : Teachesreal[] = []
  teaches : mytype[]  = []

  constructor(
    private moduleService: ModuleService,
    private professorService: ProfessorService,
    private teachesService: TeachesService,
    private semesterService: SemesterService,
    private sessionService: SessionService,
    private typehService: TypehService,
    private yearService: YearService,
    private loginService:LoginService,
    private cookies:CookieService
  ) {}

  t : string = ''
  p : number = 1
  itemsperpage : number = 25
  test : any = []
  test1 : any = {}
  types : Typeh[] = []
  keys : string[] = []
  username : string = ''

  unit : any = {
    11 : {
      cours : [{key : {teacher_id: 5, module_id: 11, year: {id : 1, name : '2021-2022'}}, semester: {id:1, name:'s1'}, session: {id:1, name:'automne'}, type: {id : 1, name : 'cours'}, hours: 10}],
      tp : [{key : {teacher_id: 5, module_id: 11, year: {id : 1, name : '2021-2022'}}, semester: {id:1, name:'s1'}, session: {id:1, name:'automne'}, type: {id : 1, name : 'cours'}, hours: 11}],
      td : [{key : {teacher_id: 5, module_id: 11, year: {id : 1, name : '2021-2022'}}, semester: {id:1, name:'s1'}, session: {id:1, name:'automne'}, type: {id : 1, name : 'cours'}, hours: 12}]
    }
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnInit() : void {
    this.loginService.getUserName({token : decodeURIComponent(this.cookies.get('email')).toString()}).subscribe(res => {
      this.username = res.message
      console.log(this.username)
      this.moduleService.read().subscribe((modules) => {
        this.teachesService.read().subscribe(data => {
          this.tasks = data
          
          let filtered = this.tasks.filter(x => x.key.year.name == '2021-2022' && x.key.teacher_id == 5)
            
          // this.test = filtered.reduce((groups : any, item : any) => {
          //   const key = item.key.module_id;
          //   if (!groups[key]) {
          //     groups[key] = [];
          //   }
          //   groups[key].push(item);
          //   return groups;
          // }, {});
  
          this.test = filtered.reduce((groups : any, item : any) => {
            const module_id = item.key.module_id;
            const typeh = item.type.name;
            if (!groups[module_id]) {
              groups[module_id] = {};
            }
            if (!groups[module_id][typeh]) {
              groups[module_id][typeh] = [];
            }
            groups[module_id][typeh].push(item);
            return groups;
          }, {});
          
  
          this.typehService.read().subscribe(res => {
            this.types = res 
            let i = 0
            this.t = `
          <table class="w-full text-sm text-left text-gray-500 font-tilt rounded-lg overflow-hidden">
                <thead class="text-[16px] text-gray-700 bg-gray-50">
                    <tr>
                        <th scope="col" class="px-7 py-5 font-tilt">
                            #
                        </th>
                        <th scope="col" class="px-7 py-5 font-tilt">
                            Professor
                        </th>
                        <th scope="col" class="px-7 py-5 font-tilt">
                            Module
                        </th>`;
              
                this.types.forEach(x => {
                  this.t += `<th scope="col" class="px-7 py-5 font-tilt">
                    ${x.name}
                  </th>`
                  })
              
  
                this.t += `
                      <th scope="col" class="px-7 py-5 font-tilt">
                          Year
                      </th>
                      <th scope="col" class="px-7 py-5 font-tilt">
                          Semester
                      </th>
                      <th scope="col" class="px-7 py-5 font-tilt">
                          Session
                      </th>
                      <th scope="col" class="px-7 py-5 font-tilt">
                      Total
                  </th>
                  </tr>
              </thead>
            <tbody class="text-[15px]">`;
  
              Object.keys(this.test).forEach(key => {
                console.log(this.test)
                  this.t += `<tr>
                  <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        ${++i}
                    </th>
                    <td class="px-6 py-4">
                      ${this.username}
                    </td>
                    <td class="px-6 py-4">
                      ${modules.find((x:any) => x.id == key).name}
                    </td>
                    `
  
                    // this.moduleService.getById(parseInt(key)).subscribe(res => {
                    //   this.t += `<td class="px-6 py-4">
                    //   ${res.name}
                    // </td>`
                    // })
  
                    let total = 0
                    this.types.forEach(x => {
                      if(Object.keys(this.test[key]).filter(type => type == x.name).length != 0 ){
                          this.t += `<td class="px-6 py-4">
                            ${this.test[key][x.name][0].hours}
                          </td>`
                          total += this.test[key][x.name][0].hours
                      }else{
                          this.t += `<td class="px-6 py-4"> -
                                    </td>`
                      }
                    })
  
                    let values : any = Object.values(this.test[key])
                    console.log(values[0][0])
  
                    this.t += `
                      <td class="px-6 py-4">
                        ${values[0][0].key.year.name}
                      </td>
                      <td class="px-6 py-4">
                      ${values[0][0].semester.name}
                    </td>
                    <td class="px-6 py-4">
                    ${values[0][0].session.name}
                  </td>
                  <td class="px-6 py-4">
                    ${total}
                  </td>
                  </tr>
                      `
                
                })
              })
          })
      })
    })


    }
  }

