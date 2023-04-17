import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  //@ViewChild('test') test! : ElementRef;
  
  constructor(private cookies : CookieService){

  }

  ngOnInit(): void {
    this.dropdown()
    this.animatenavhide()
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

  //animate nav on small screens : screen < lg
  //it only shows, it doesn't hide yet (the hide animation is already made in css file)
  animatenavshow(){
    let nav = document.getElementById('smallnav')
    nav?.classList.remove('hidenavanimation')
    nav?.classList.add('shownavanimation')
    // nav?.classList.remove('shownavanimation')
    // nav?.classList.add('hidenavanimation')
  }

  animatenavhide(){
    document.getElementById('smallnav')?.addEventListener('click', (e) => {
      let x = e.target as HTMLElement
      if(x.getAttribute('id') === 'smallnav'){
        x.classList.remove('shownavanimation')
        x.classList.add('hidenavanimation')
      }
    })
    // let nav = document.getElementById('smallnav')
    // nav?.classList.remove('shownavanimation')
    // nav?.classList.add('hidenavanimation')
  }

  logout(){
    this.cookies.delete('token')
    setTimeout(() => {
      location.reload()
    },2000)
  }
}
