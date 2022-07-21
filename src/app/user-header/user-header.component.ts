import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-user-header',
  template: `
     <nav onload="verifyLogged()" class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item is-size-4 is-uppercase" href="../">
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


    <div class="navbar-end">
      <div class="navbar-item">
        
      <div class="navbar-item has-dropdown is-hoverable" style="padding-right: 120px;">
        <div class="navbar-link is-arrowless">
        <i class="fa-solid fa-user"></i>
        </div>
        <a class="navbar-link is-arrowless">
          {{Username}}
        </a>

        <div class="navbar-dropdown">
         
          <a class="navbar-item" (click)="DeleteSession()">
            Se deconnecter
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>

  `,
  styles: [
  ]
})
export class UserHeaderComponent implements OnInit {
  
  Username : any;
  id : any;
  
  constructor(private router :Router , private SessionManager :LocalStorageServiceService ) { }
  

  ngOnInit(): void {
        this.id = this.SessionManager.getItem("UserID");
        this.Username = this.SessionManager.getItem("UserEmail")

      

     
   
  }

  DeleteSession(){

      this.SessionManager.removeItem("UserID");
      this.SessionManager.removeItem("UserEmail");

      this.router.navigate(['../login']);

    
  }
  }




