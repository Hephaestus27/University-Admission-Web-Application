import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionServiceService } from '../admission-service.service';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { UserAdmission } from '../UserAdmission';

@Component({
  selector: 'app-udashboard',
  template: `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.0.0/css/all.css" crossorigin="anonymous">
        <app-user-header></app-user-header>
          <div  class="container">

      <div class="Description-container box mt-6 mb-6 mr-6 ml-6">
        <div class="description">
          <div class="intro">
            <h3 class="title is-3">

        

              Title
            </h3>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas nam corporis eum natus blanditiis reprehenderit nisi tempora, architecto porro, similique illo qui? Neque reiciendis et quis delectus inventore aspernatur?
            </p>
          </div>

          </div>
          
          
          
        </div>
        <div class="incription-container m-6">
            <div class="inscription-title title">

              <h5 class="title  is-">
              Démarrer une nouvelle demande d'inscription pour :

              </h5>
            </div>
          <div class="inscription-btn">

            <button class="candidature button is-success is-responsive is-outlined ml-3" routerLink="/candidature"> Cours de l'année 2022-2023 </button>
            
          </div>
            
            
          </div>

          <div class="inscription-log m-6">

            <div class="inscription-log-title title">
              <h5 class="title is-4">
                Mes demandes d'inscriptions :
                
              </h5>
            
          </div>


            <div class="table is-striped box overflow-hidden" style="overflow:auto;">
              <tr class="is-responsive">
                <th> 
                  
                  <div class="table-header button is-white is-reponsive">

                    <button class=" button is-white is-reponsive" onclick='sorticon(1);'>Création </button>
                    <span class="icon-text">
                      <span class="icon is-small">
                      <i class="sorting fa-solid fa-arrow-up-short-wide"></i>
                       
                         </span>                      
                                          </span>
                                    </div>
                </th>
                    <th> 
                    <div class="table-header button is-white is-reponsive">

                        <button class=" button is-white is-reponsive" onclick='sorticon(2);'> Type </button>
                        <span class="icon-text">
                          <span class="icon is-small">
                          <i class="sorting fa-solid fa-arrow-up-short-wide"></i>
                          
                            </span>                      
                            </span>
                                        </div>
                    </th>
                <th> 
                <div class="table-header button is-white is-reponsive">

                  <button class=" button is-white is-reponsive" onclick='sorticon(3);'>Formation </button>
                  <span class="icon-text">
                    <span class="icon is-small">
                    <i class="sorting fa-solid fa-arrow-up-short-wide"></i>
                    
                      </span>                      
                      </span>
                </div>

                </th>
                <th>
                  
                <div class="table-header button is-white is-reponsive">

                    <button class=" button is-white is-reponsive" onclick='sorticon(4);'>Etat </button>
                    <span class="icon-text">
                      <span class="icon is-small">
                      <i class="sorting fa-solid fa-arrow-up-short-wide"></i>
                       
                         </span>                      
                                          </span>
                                    </div>

                </th>
                <th> 
                <div class="table-header button is-white is-reponsive">

                      <button class=" button is-white is-reponsive" onclick='sorticon(5);'>Date de modification </button>
                      <span class="icon-text">
                        <span class="icon is-small">
                        <i class="sorting fa-solid fa-arrow-up-short-wide"></i>
                        
                          </span>                      
                      </span>
                </div>
                </th>

              </tr>
           
              <tr class=" tabledata table is-striped">
                <td>{{this.datedepot}}</td>
                <td>{{this.type}} </td>
                <td>{{this.formation}}</td>
                <td>{{this.etat}}</td>
                <td>{{this.Modifdate}}</td>

              </tr>

            </div>

          </div>
              </div>

              <app-footer></app-footer>

              <router-outlet></router-outlet>
  `,
  styleUrls: ["udashboard.component.css",

  ]
})
export class UdashboardComponent implements OnInit {

  Username: any;
  id: any;
  admissionsList: any;

  datedepot: any;
  admissiontype: any;
  formation: any;
  etat: any;
  Modifdate: any;
  type: any;
  constructor(private router: Router, private SessionManager: LocalStorageServiceService, private AdmissionService: AdmissionServiceService) { }

  Admissions: UserAdmission = new UserAdmission("", "", "", "", "", false, "", "", "", -1, "", "", "", "");
  ngOnInit(): void {


    if (this.SessionManager.getItem("UserID")) {
      this.Username = this.SessionManager.getItem("UserID");

      setTimeout(() => {
        let resp = this.AdmissionService.FetchAdmission(this.Username);
        resp.subscribe((data) => {
          this.Admissions = JSON.parse(data.toString());
          if (this.Admissions.choixFilierePrincipale == "E-INF") {
            this.formation = "Genie Informatique";
            this.type ="Inscription Scolaire 2022 - 2023";

          } else if (this.Admissions.choixFilierePrincipale == "E-ECO") {
            this.formation = "SCIENCES ECONOMIQUES ET GESTIONS";
            this.type ="Inscription Scolaire 2022 - 2023";

          } else if (this.Admissions.choixFilierePrincipale == "E-DROIT") {
            this.formation = "Etudes de droit français";
            this.type ="Inscription Scolaire 2022 - 2023";
          }
          this.datedepot = this.Admissions.dateDepot.split('T')[0];
          this.Modifdate = this.Admissions.dateModification.split('T')[0];
          if (this.Admissions.status != null) {
            this.etat = this.Admissions.status;
          } else {
            this.etat = "En cours de traitement";
          }
        });
      }, 1000);


    } else {
      this.router.navigate(['/login']);
    }
  }



}
