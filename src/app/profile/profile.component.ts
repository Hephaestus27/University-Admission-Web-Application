import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
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

      <a class="navbar-item" routerLink="../../user/courses">
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
          <a class="navbar-item" routerLink="../">
            Se deconnecter
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>

    <div class="Container">

      <div class="Profile">

        <div class="title">
          Votre Profile
        </div>

        <div class="ProfileForm">

        <form action="#">
         <div class="field is-horizontal mb-5">
          <div class="field-label is-normal">
            <label class="label">Nom Complet</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Nom" value="SINDEL"> 
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Prenom" value="Yassine">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal mb-5">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">
                    +212
                  </a>
                </p>
                <p class="control is-expanded">
                  <input class="input" type="tel" placeholder="Numero de telephone" value="607462157">
                </p>
              </div>
              <p class="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

      
        <div class="field is-horizontal mb-5">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input EmailInput" type="Email" placeholder="e.g. University@gmail.com" value="Yassinesindel@gmail.com">
              </div>
              
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="password" placeholder="Mot de passe" value="**********"> 
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Repeter le mot de passe" value="**********">>
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>


        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary ">
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>

      </form>

        </div>
      </div>


    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ["profile.component.css"],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
