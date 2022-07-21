import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionServiceService } from '../admission-service.service';
import { LocalStorageServiceService } from '../local-storage-service.service';

@Component({
  selector: 'app-paiement',
  template: `
   
   <app-user-header></app-user-header>


    <div class="containerpay">
      <div class="titl">
        <div class="texte">
          <h3>Paiement d'inscription</h3>
        </div>
      </div>
      <div class="wrapper" id="wrapper">
        
      <form>
      <div class="formwrapper">
      <div class="grid1">
        <div class="formcontrol">
        <label for="cardholder">Nom Complet</label>
          <input name="cardholder" type="text"  onkeypress="return (event.charCode > 64 && 
event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" autocomplete="off"> <!-- onkeydown="return /[a-z]/i.test(event.key)" -->
        </div>
        <div class="formcontrol">
          <label for="digits">16 Digits</label>
            <input name="digits" type="number" maxlength="16" minlength="16"  autocomplete="off">
        </div>
       </div>
      <div class="grid2">
        <div class="formcontrol">
            <p id="expr">Expiration Date:</p>
            <div class="expiration">
            <input name="months" id="months" type="number" size="2" min="1" max="12"  autocomplete="off">
            <span>/</span>
            <input name="years" id="years" type="number" maxlength="4" minlength="4" min="2022" max="2040"  autocomplete="off">
            </div>

        </div>

        <div class="formcontrol">
          <div class="cvvwrap">
          <label for="cvv">CVV/CVN :</label>
          <input id="cvv"type="number" name="cvv"   autocomplete="off" pattern="\d{3}|\d{8}"  title="must be 3 or 8 digit">
        
          </div>    
      </div>

    
      </div>
      <div class="grid2">
        <div></div>
        <div class="confirmation">
          <input type="submit" name="submit" value="Confirm" class="button is-success"(click)="validatepaiement()">
        </div>
      </div>
      </div>

      </form>
      </div>

      <div class="Paiementsuccessful" id="Paiementsuccessful">
        <div class="title">
          PAIEMENT SUCCESSFUL
        </div>
        <div class="return">
          <button class="button is-success" (click)="nav();">Return to the dashboard</button>
        </div>
      </div>
    </div>
  `,
  styleUrls:["paiement.component.css"],
})
export class PaiementComponent implements OnInit {
  id: any;
  paiementmsg: any;
;
  Username: any;
  admissioned: any;

  constructor(private router :Router , private Admissions:AdmissionServiceService,private SessionManager :LocalStorageServiceService ) { }

  ngOnInit(): void {
    
    this.id = this.SessionManager.getItem("UserID");
    this.Username = this.SessionManager.getItem("UserEmail");
    this.admissioned = this.SessionManager.getItem("admissioned");
    
    if(this.SessionManager.getItem("UserID")==null){
      this.router.navigate(['../login']);
      
    }
        
    if(this.SessionManager.getItem("admissioned")==null){
      this.router.navigate(['../login']);
      
    }
  
  
  }
  validatepaiement(){

    //check infos first


    // validate

    let resp = this.Admissions.Paiement(this.id);
    resp.subscribe((data) => this.paiementmsg = data);
    
    if(this.paiementmsg == 1){
     let wrapper =  document.getElementById('wrapper');
      wrapper!.style.display="none";
      let Paiementsuccessful =  document.getElementById('Paiementsuccessful');
      Paiementsuccessful!.style.display="block";



    }
  }

  nav(){
    this.router.navigate(['userdashboard']);
  }
}
