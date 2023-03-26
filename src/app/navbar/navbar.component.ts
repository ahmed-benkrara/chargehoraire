import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  //@ViewChild('test') test! : ElementRef;
  
  constructor(){

  }

  ngOnInit(): void {
    this.dropdown()
  }

  dropdown(){
    document.querySelectorAll('main.listitem').forEach(el => {
      el.addEventListener('click', (e) => {
        let main = e.currentTarget as HTMLElement
        let icon = main.childNodes[0].childNodes[2] as HTMLElement
        let ul = main.nextElementSibling
        if(!icon.classList.contains('dropdown')){
          icon.classList.remove('swipup')
          icon.classList.add('dropdown')
          ul?.classList.remove('slideup')
          ul?.classList.add('slidedown')
        }else{
          icon.classList.remove('dropdown')
          icon.classList.add('swipup')
          ul?.classList.remove('slidedown')
          ul?.classList.add('slideup')
        }
      })
    })
  }

}
