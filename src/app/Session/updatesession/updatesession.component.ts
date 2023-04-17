import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/sessionService/session.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface session {
  id: number,
  name: string
}

@Component({
  selector: 'app-updatesession',
  templateUrl: './updatesession.component.html',
  styleUrls: ['./updatesession.component.css']
})
export class UpdatesessionComponent implements OnInit{

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  session: session = {
    id: 0,
    name: ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id']
      this.sessionService.getById(id).subscribe(
        (response) => {
          if (response != null) {
            this.session.id = response.id
            this.session.name = response.name
          } else {
            this.router.navigate(['/sessions'])
          }
        }
      )
    })
  }

  update() {
    let name = document.getElementById("name") as HTMLElement
    if (this.session.name.trim().length == 0) {
      //invalid
      this.validationStyle(name, true, "name isn't valid")
    } else {
      this.validationStyle(name, false, "")
      this.sessionService.update(this.session).subscribe(
        (response) => {
          alert("updated successfully!")
        },
        (err) => {
          alert("something went wrong please try again later!")
        }
      )
    }
  }

  validationStyle(element: HTMLElement, error: boolean, message: string) {
    if (element) {
      if (!error) {
        element.removeAttribute('style')
        element.removeAttribute('title')
      } else {
        element.style.borderColor = "red"
        element.setAttribute('title', message)
      }
    }
  }
}
