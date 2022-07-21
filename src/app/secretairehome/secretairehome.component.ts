import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdmissionServiceService } from '../admission-service.service';
import { AdmissionComptable } from '../admissionListComptable';
import { AdmissionList } from '../admissionListSecretaire';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-secretairehome',
  template: `

  <section class="container">

  <div class="title">

  <h2 class="title is-3">Bienvenue au service université</h2>

  </div>


  <div class="admissiontable">


  <div class="table">

  <table id="tableadmission">
  <tr class="headrow">

    <td>Filliere principale</td>
    <td>Filliere secondaire</td>
    <td>Date de dépot</td>
    <td>Validation d'inscription</td>

  </tr>

  

</table>

  </div>
  
</div>

  
  </section>

  `,
  styleUrls: ["secretairehome.component.css"
  ]
})
export class SecretairehomeComponent implements OnInit {
  employeid: any;
  Username: any;
  AdmissionsList :any;
  admissionStringHandler : any;
  Admis : AdmissionList = new AdmissionList('','','')
  constructor(private router : Router, private ListAdmission : AdmissionServiceService,private SessionManager : LocalStorageServiceService) { }

  ngOnInit(): void {
    
    if (  this.SessionManager.getItem("ServiceID")  != null){
      this.Username = this.SessionManager.getItem("ServiceID");

      if(this.SessionManager.getItem("ServiceID") == "2"){

        this.router.navigate(['/comptable']);

      }
    }else{
      this.router.navigate(['/employeelogin']);
    }
   

    let resp = this.ListAdmission.secretaire();
    
    resp.subscribe((UserData) => {
      this.AdmissionsList = UserData.toString();
      this.AdmissionsList = this.AdmissionsList.substring(1, this.AdmissionsList.length - 1);
      
      this.admissionStringHandler = this.AdmissionsList.replace("},", "},#").split(",#"); 

      this.generateTable(this.admissionStringHandler);
      
  
  

    });

    
  }


generateTable( Admission : any){
  
  var table = <HTMLTableElement>document.getElementById('tableadmission');

  for (let i=0 ; i<=Admission.length ; i++){
    this.Admis = JSON.parse(Admission[i]);
    console.log(Admission[i]);
    let id :any;
    let fil1 :any;
    let fil2 :any;
    let date :any;

    fil1 = (this.Admis.choixFilierePrincipale);
    fil2 = (this.Admis.choixFiliereSecondaire);
    date = (this.Admis.dateDepot.split('T')[0]);
    var tr =  document.createElement("tr");
   
    tr.innerHTML = "<td>" + fil1 + "</td><td> " + fil2 + " </td><td>" +date + "</td>";

    var button = document.createElement('button');
   
    button.innerText = "Valider l'Inscription";
    button.setAttribute('class','button is-success');
    tr.setAttribute('class','trrow');
    tr.setAttribute('id','tr'+i);
    tr.innerHTML = tr.innerHTML + "<button class='validatebtn  button is-small is-success' style='  margin: auto;display: block;'>Valider l'Inscription</button> ";

    tr.addEventListener('click',()=>{
      this.ValidateAdmission('tr'+i);
    })
    table.appendChild(tr);
  }




}
ValidateAdmission(id:any){
  console.log(id);
}
}
