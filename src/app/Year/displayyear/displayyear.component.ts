import { Component, OnInit } from '@angular/core';
import { YearService } from 'src/app/services/yearService/year.service';

interface year{
    id : number,
    name : string
}

@Component({
    selector: 'app-displayyear',
    templateUrl: './displayyear.component.html',
    styleUrls: ['./displayyear.component.css']
})
export class DisplayyearComponent implements OnInit{
    constructor(private yearService:YearService){}

    data : year[] = []
    p : number = 1
    itemsperpage : number = 25

    ngOnInit(): void {
        this.yearService.read().subscribe(
            (response) => {
                this.data = response
            }
        )
    }

    delete(id : number){
        if(confirm('are you sure you want to delete this year ? deleting it will cause deleting everything that has a value with it!')){
            this.yearService.delete(id).subscribe(
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