import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatRegistrationService } from '../candidat-registration.service';
import { User } from '../user';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-postuler',
  template: `
    <app-header></app-header>
    <section id="infos" class="hero is-small is-{{HeroColor}} p-3" style=" display:none; position:fixed; top:0; width:100%; z-index:99;">
  <div>
    <p class="title">
      {{HeroTitle}}
    </p>
    <p class="subtitle pl-6">
    {{HeroSub}}
  </p>
  </div>
</section>

    <div class="container">

    <div class="box" style="margin:10%; padding: 50px 50px;">
    <div class="title">
      <p class="subtitle is-3 has-text-centered"	 style="padding:30px;"> POSTULER VOTRE CANDIDATURE</p>
    </div>
    <form method="_GET" action="">
    <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label" >Nom Complet </label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input" name="prenomf" id="prenomf" [(ngModel)] = "candidat.prenom" pattern="[A-Za-z]{0,50}" type="text" placeholder="Prenom" autocomplete="off" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
        <p class="help is-danger" id="warnprenom" style="display:none;">Veuillez saisir un prenom sans caractères spéciaux</p>
  
      </div>
      <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input" name="nomf" id="nomf" type="text" placeholder="Nom"   [(ngModel)] ="candidat.nom"  pattern="[A-Za-z]{0,50}"   autocomplete="off" pattern="[A-Za-z]{15}" required>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
          </span>
        </p>
        <p class="help is-danger" id="warnnom" style="display:none;">Veuillez saisir un nom sans caractères spéciaux</p>
  
      </div>
    </div>
  </div>
  
  <div class="field is-horizontal">
  <div class="field-label is-normal">
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" id="cinf" name="cinf"  type="text"  [(ngModel)] = "candidat.cin"  pattern="[A-Za-z]{1,2} [0-9]{4,6}" [maxLength]="9" autocomplete="off" placeholder="CARTE NATIONAL ( CIN )" required>
        <span class="icon is-small is-left">
        <i class="fas fa-id-card"></i>
         </span>
      </p>
  
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" name="villedenaissancef" id="villedenaissancef"  [(ngModel)] = "candidat.villeNaissance" maxlength="25" type="text" placeholder="Ville de naissance" value="" required>
        <span class="icon is-small is-left">
        <i class="fa-solid fa-map-pin"></i>
                    </span>
        <span class="icon is-small is-right">
        </span>
      </p>
      <p class="help is-danger" id="warnvilledenaissance" style="display:none;">Veuillez saisir une ville de naissance valide</p>
  
    </div>
  </div>
  </div>
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
    <label class="label">Numero de téléphone </label>
  </div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +212
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" id="numerodetelf" name="numerodetelf" [(ngModel)] = "candidat.tel" type="number" placeholder="Your phone number"  required>
        </p>
      </div>
      <p class="help">Do not enter the first zero </p>
      <p class="help is-danger" id="warntel" style="display:none;">Veuillez saisir un numéro de telephone valide</p>
  
    </div>
  </div>
  </div>
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Nom d'utilisateur </label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input"  name="usrnamef" id="usrnamef" type="text" placeholder="Nom d'utilisateur" required>
          <span class="icon is-small is-left">
          <i class="fa-solid fa-circle-user"></i>     </span>
        </p>
        <p class="help is-danger" id="warnuser" style="display:none;">Veuillez saisir un nom d'utilisateur valide </p>
  
      </div>
      <div class="field-body">
  
      <div class="field-label is-normal">
      <label class="label"> Email </label>
    </div>
      <div class="field">
      
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input" name="emailf" id="emailf" [(ngModel)] = "candidat.mail" [(ngModel)] = "user.email" type="email" placeholder="Email" value="" required>
          <span class="icon is-small is-left">
          <i class="fa-solid fa-at"></i>
          </span>
          <span class="icon is-small is-right">
          </span>
        </p>
      </div>
    </div>
    </div>
  
  </div>
  
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Mot de passe </label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded has-icons-left">
          <input class="input"  name="pwdf" id="pwdf"  [(ngModel)] = "user.password" type="password" placeholder="Mot de Passe" required>
          <span class="icon is-small is-right">
          <i class="fa-solid fa-eye" style=" position: absolute; right: 50px;z-index: 1;"></i>
               </span>
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i></span>
          
        </p>
        <p class="help is-danger" id="warnpwd" style="display:none;">Saisissez un mot de passe de 8 caractères minimum</p>
  
      </div>
      <div class="field-body">
  
      <div class="field-label is-normal">
      <label class="label"> Confirm </label>
    </div>
      <div class="field">
      
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input" name="pwdconfirmf" id="pwdconfirmf" type="password" [(ngModel)] = "confirmpassword" placeholder="Confirmez le mot de passe" value="" required>
          <span class="icon is-small is-right">
          <i class="fa-solid fa-eye" style=" position: absolute; right: 10px;z-index: 1;"></i>
               </span>
          <span class="icon is-small is-left">
          <i class="fas fa-lock"></i></span>
          <span class="icon is-small is-right">
          </span>
        </p>
        <p class="help is-danger" id="warnpwdconfirm" style="display:none;">Mot de passe non identique</p>
  
      </div>
    </div>
    </div>
  
  </div>
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Sexe</label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">
            <select  >
              <option  value="h">Homme</option>
              <option  value  = "f" value="f">Femme</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Pays et Ville </label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" name="paysf" id="paysf" [(ngModel)] = "candidat.pays" type="text" placeholder="Pays" required>
        <span class="icon is-small is-left">
        <i class="fa-solid fa-globe"></i>
                </span>
      </p>
      <p class="help is-danger" id="warnpays" style="display:none;"> Veuillez saisir le nom du pays sans caractères spéciaux </p>
  
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" name="villef" id="villef" [(ngModel)] = "candidat.ville" type="text" placeholder="Ville" value="" required>
        <span class="icon is-small is-left">
        <i class="fa-solid fa-location-dot"></i>
       </span>
        <span class="icon is-small is-right">
        </span>
      </p>
      <p class="help is-danger" id="warnville" style="display:none;"> Veuillez saisir le nom de la ville sans caractères spéciaux </p>
  
    </div>
  </div>
  </div>
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
    <label class="label">Adresse</label>
  </div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
       <p class="control is-expanded">
          <input class="input" name="adressef" id="adressef" [(ngModel)] = "candidat.adresse" type="text" placeholder="Ton adresse" required>
        </p>
        
      </div>
    </div>
  </div>
  </div>
  
  
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Code postal (ZIP CODE) </label>
  </div>
  <div class="field-body">
    
  <div class="field">
  <p class="control is-expanded has-icons-left has-icons-right"style="width:130px;">
    <input class="input" name="zipcodef" type="tel" [(ngModel)] = "candidat.codePostal" id="zipcodef" maxlength="5" placeholder="12345" value="" required>
    <span class="icon is-small is-left">
    <i class="fa-solid fa-envelope"></i>
    </span>
  </p>
  <p class="help is-danger" id="warnzipcode" style="display:none;"> Veuillez saisir un code postal valide </p>
  
  </div>
  
  </div>
  </div>
  
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Niveau d'études </label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input" name="bacf" id="bacf" type="text" style="width:98%;" [(ngModel)] = "candidat.niveauEtude" placeholder="Ex: Baccalauréat en Computer Science" required>
        <span class="icon is-small is-left">
        </span>
      </p>
    </div>
    
  </div>
  </div>
  
  
  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label"> Passeport </label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" name="passeportf" id="passeportf" type="text" style="width:98%;" placeholder="" required>
        <span class="icon is-small is-left">
        <i class="fa-solid fa-passport"></i>
              </span>
      </p>
    </div>
    
  </div>
  </div>
  
  <div class="field is-horizontal" style="padding:20px;">
  <div class="field-label is-normal">
    <label class="label"> télécharger Votre Image </label>
  </div>
  
   
    <div class="field-body">
      <div class="field">
        <div class="control">
        <div class="file has-name">
    <label class="file-label">
   
      <input  class="file-input" name="fileimage" id="filename" type="file" name="profile" accept="image/png,image/jpeg">
      
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a file…
        </span>
      </span>
      <span class="file-name" id="file-name">
        
      
      </span>
    </label>
  </div>
        </div>
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
        <input type="submit" id="submit" class="button is-success" value="Postuler La candidature" (click)="registernow()" required>
  
        </div>
      </div>
    </div>
  </div>
  </form>
    </div>
    </div>
  `,
  styles: [
  ]

})
export class PostulerComponent implements OnInit {

  HeroColor :any
  HeroTitle :any
  HeroSub   :any
  confirmpassword: any

  warnInfo =   document.querySelector('#infos');
  constructor(private router:Router,private service: CandidatRegistrationService, private UserService: UserRegisterService) { }

  ngOnInit(): void {
  }
  candidat: Candidat = new Candidat("", "", "", "", "", "", "N/A", "", "", "", "onGoing", "", null, "");
  candidatmessage: any;
  
  user: User = new User("", "", true, false,null,-1);
  UserMessage: any;

  validateform(e: Event) {
  }




  public registernow() {
    if (this.user.password == this.confirmpassword) {
      
      

    let resp = this.service.RegisterCandidat(this.candidat);
    resp.subscribe((data) => this.candidatmessage = data);
   setTimeout(() => {
    if(this.candidatmessage != 0){
      this.user.candidatid = this.candidatmessage;
      console.log(this.user.candidatid);
      let UserResp = this.UserService.RegisterUser(this.user);
      UserResp.subscribe((UserDATA) => {
        
        if(UserDATA != HttpStatusCode.InternalServerError){
          this.router.navigate(['/login']);
        }
      });
    }   
  }, 1000);
  
}
     if( (this.candidatmessage != null) && (this.UserMessage!=null) ){
       this.HeroColor = "primary";
       this.HeroTitle = "Candidature enregistré !";
       this.HeroSub = " Veuillez verifier votre Boite Email pour valider votre compte";
       this.warnInfo?.setAttribute('style','opacity:100;position:fixed; top:0; width:100%; z-index:99;')
       this.router.navigate(['/login']);

      }

  }
}
