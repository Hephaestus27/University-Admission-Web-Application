import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
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
      <a class="navbar-item" routerLink="../../dashboard">
        Home 
      </a>

      <a class="navbar-item" routerLink="../../dashboard">
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
          Etudiant A
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" routerLink="../../user/profile">
            Mon profile
          </a>
          <a class="navbar-item" routerLink="../../user/notes">
            Mes Notes
            
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" routerLink="../../">
            Se deconnecter
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</nav>

<div class="Maincontainer">
  <div class="borderbx">
    <div class="wrap">
      
      <div class="profilecontainer">
        <div class="ProfileName">
          <div class="profileimage">
            
            <i class="ProfileImg fa-solid fa-circle-user"></i>
          </div>
          <div class="name">
            
            <h2 class="fullname">YASSINE SINDEL</h2>
            <p class="descr">Fillière : Genie Informatique</p>
          </div>
        </div>
      </div>
      
      
      </div>
      <div class="notescontainer table-container ">
    <table class="table is-hoverable table is-striped">
      
      <thead class="headtable">
        <tr>
          <th> Module</th>
          <th class="note" id="note">Note :  / 100</th>
        </tr>
        
      </thead>
      <tbody>
        <tr>
          <th>COURS A</th>
          <th class="note"> 85 / 100</th>
          
        </tr>
        <tr> 
          <th>COURS B</th>
          <th class="note"> 30 / 100</th> 
        </tr>
        
        <tr> 
          <th>COURS C</th>
          <th class="note"> 70 / 100</th> 
        </tr>

        <tr> 
          <th>COURS D</th>
          <th class="note"> 50 / 100</th> 
        </tr>
      </tbody>
      
    </table>
  </div>
</div>
</div>

`,
  styleUrls: ["notes.component.css"
  ]
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
