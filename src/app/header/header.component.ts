import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div  onload="verifyLogedin()" class="navbar is-dark is-flex is-flex-direction-row is-justify-content-flex-end.container.is-max-desktop">
  <div class="navbar-brand ">
      <a class="navbar-item" routerLink="">
      UNIVERSITY 
      </a>
      </div>
      <div class="navbar-brand ">

      <div class=" is-flex is-flex-direction-row is-justify-content-flex-end	" style="position: absolute;right: 5%;">
        <div class="navbar-item" >
          <button class="button is-info is-light" routerLink ="../postuler"> Postuler Une Candidature</button>
        </div>

          <div class="navbar-item" >
            <button class="button is-primary is-light" routerLink="../login"> Se Connecter</button>
          </div>

          <div class="navbar-item" >
            <button class="button is-warning is-light" routerLink="../contactus"> Contactez-Nous</button>
          </div>
          </div>
      </div>
  </div>

  `,
  styles: [

  ]
})
export class HeaderComponent implements OnInit {
  Username: any;
  constructor() { }

  ngOnInit(): void {
  }

  verifyLogged() {

    if (sessionStorage.getItem('username')) {
      this.Username = sessionStorage.getItem('username');
      window.location.href = "userdashboard"

    }
  }
}


