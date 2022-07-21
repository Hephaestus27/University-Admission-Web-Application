import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-logged-header',
  template: `
    
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item is-size-4 is-uppercase" href="">
      <!-- <img src="" width="112" height="28"> -->
        University
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="../dashboard">
        Home 
      </a>

      <a class="navbar-item" routerLink="../dashboard">
        Mes Cours
      </a>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        
      <div class="navbar-item has-dropdown is-hoverable" style="padding-right: 120px;">
        <div class="navbar-link is-arrowless">
        <i class="fa-solid fa-user"></i>
        </div>
        <a class="navbar-link is-arrowless">
        {{id}}

        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" routerLink="../user/profile">
            Mon profile
          </a>
          <a class="navbar-item" routerLink="../user/notes">
            Mes Notes
          </a>
        
          <hr class="navbar-divider">
          <a class="navbar-item" (click)="Logout();">
            Se deconnecter
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>

<router-outlet></router-outlet>
      
  `,
  styles: [
  ]
})
export class LoggedHeaderComponent implements OnInit {
  Username: any;
  id:any;
  constructor(private router : Router, private SessionManager : LocalStorageServiceService) { }

  ngOnInit() : void {
    
    this.Username = this.SessionManager.getItem("UserEmail")
    console.log(this.Username);
    this.id = this.SessionManager.getItem("UserID")
    console.log(this.id);


  }

  Logout(){
    this.SessionManager.removeItem("userID");
    this.SessionManager.removeItem("UserEmail");
    this.router.navigate(['/login']);


  }
}
