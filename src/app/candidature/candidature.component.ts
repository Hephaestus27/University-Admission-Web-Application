import { HttpStatusCode } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionData } from '../Admission';
import { AdmissionServiceService } from '../admission-service.service';
import { Candidat } from '../candidat';
import { CandidatRegistrationService } from '../candidat-registration.service';
import { LocalStorageServiceService } from '../local-storage-service.service';
@Component({
  selector: 'app-candidature',
  template: `
  <app-user-header></app-user-header>
      <div class="container handlecontainer  has-background-light" style="margin-top:40px;">
      <div class="FormPages is-flex-wrap-nowrap	 is-flex-direction-row	 columns is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" style="margin:10px 0 0 0;">
      
      <div id="activeForm" class="pages page1 column" (click)="activeForm('1')">

          <div  class="circl" style="text-align: center;">
            <a id="activeCircle" class="button is-rounded circlbtn ">
            1
            </a>
          
              <p class="pagetitle">
                Choix d'études
              </p>
              
          </div>
      </div>

        <div class=" pages page2 column" style="text-align: center;"  (click)="activeForm('2')"> 
     <div class="circl">
            <a class="button is-rounded circlbtn">
             2
            </a>
          
              <p class="pagetitle">
                Informations personnelles
              </p>
              
          </div>    
        </div>

        <div class="pages page3 column" style="text-align: center;" (click)="activeForm('3')">
        <div class="circl">
            <a class="button is-rounded circlbtn">
             3
            </a>
          
              <p class="pagetitle">
                Etudes secondaires
              </p>
              
          </div>
        </div>

        <div class=" pages page4 column" style="text-align: center;" (click)="activeForm('4')">
        <div class="circl">
            <a class="button is-rounded circlbtn">
             4
            </a>
          
              <p class="pagetitle">
                Autre Informations
              </p>
              
          </div>
        </div>


        <div class=" pages page5 column " style="text-align: center;" (click)="activeForm('5')">
        <div class="circl">
            <a class="button is-rounded circlbtn">
             5
            </a>
          
              <p class="pagetitle">
               Récapitulatif
              </p>
              
          </div>
        </div>

       


    </div>

    <form action="">
    <DIV id="f1" class="container PageForm activeForm">

      <div class="Formwrapper">


        <div class="SG">

        <div></div>

        <div>

          <label class="labels" for="PrimaryBranch"> fillière Principale : </label>
          <select id="filliereA" class="inputForm"  [(ngModel)] ="Admissions.choixFilierePrincipale"  name="PrimaryBranch"  placeholder="Choix de fillière"required>
          <option class="options" value="" disabled selected>CHOIX DE FILLIERE PRINCIPALE</option>
            <option class="options" value="E-INF">Genie Informatique</option>
            <option class="options" value="E-ECO">SCIENCES ECONOMIQUES ET GESTIONS</option>
            <option class="options" value="E-DROIT">Etudes de droit français</option>
          </select>

        <div></div>
        </div>

        <div class="mt-6">

<label class="labels" for="SecondaryBranch" style="font-size:15px;"> fillière Secondaire : </label>
<select id="filliereB" class="inputForm" name="SecondaryBranch" [(ngModel)] ="Admissions.choixFiliereSecondaire" placeholder="Choix de fillière"required>
<option class="options" value="" disabled selected>CHOIX DE FILLIERE SECONDAIRE</option>
  <option class="options" value="E-INF">Genie Informatique</option>
  <option class="options" value="E-ECO">SCIENCES ECONOMIQUES ET GESTIONS</option>
  <option class="options" value="E-DROIT">Etudes de droit français</option>
</select>

<div></div>
</div>
    
        </div>

        <div class="TGF">
          <div></div>
          <div></div>
          <div class="NextBtn">
            <button class="Cancelbtn button is-danger" (click)="cancelForm()"> Annuler</button>
           
            <div>
  
              <button class="Cancelbtn button is-warning" (click)="SaveOnlyForm()"> 
                <i class="fa-solid fa-pause"></i>
                Continuer Plus tard
              </button>
  
            </div>
  
            <button class="Nextbtn button is-dark" (click)="SaveForm(2)">Sauvegarder et continuer</button>
          </div>
        </div>


   
      </div>

    </DIV>

    <DIV id="f2" class="container PageForm">

      <div class="Formwrapper">

    

        <div class="DG">

        <div>
          <label class="labels"for="nom">Nom de famille</label>
          <input type="text" id="ngnom"  class="TextInput is-uppercase" name="nom" placeholder="Nom" required>
        </div>

  

        <div>
          <label for="nom" class="labels">Prenom</label>
          <input  type="text" id="ngprenom" class="TextInput is-uppercase" name="Prenom" placeholder="Prenom" required>
        </div>
        </div>
        
        <div class="TG">

          <div>
          <label class="labels" for="Gender"> Sexe : </label>
          <select class="OptionInput"id="ngsexe" name="Gender"  placeholder="Choisir votre Sexe" required> 
            <option class="options" value="M">homme</option>
            <option class="options" value="F">femme</option>
          </select>
        </div>
        
        <div>
          <label class="labels" for="Gender"> Ville : </label>
          <select class="OptionInput" id="ngville" name="ville"  placeholder="Choisir votre ville"required>
            <option class="options" value="CASABLANCA">Casablanca</option>
            <option class="options" value="MEKNES">meknes</option>
            <option class="options" value="FES">Fes</option>
            <option class="options" value="Tangier">Tangier</option>
            <option class="options" value="Marrakech">Marrakech</option>
            <option class="options" value="Salé">Salé</option>
            <option class="options" value="Rabat">Rabat</option>
            <option class="options" value="Oujda">Oujda</option>
            <option class="options" value="Kenitra">Kenitra</option>
            <option class="options" value="Agadir">Agadir</option>
            <option class="options" value="Tetouan">Tetouan</option>
            <option class="options" value="Temara">Temara</option>
            <option class="options" value="Safi">Safi</option>
            <option class="options" value="Mohammedia">Mohammedia</option>
            <option class="options" value="Khouribga">Khouribga</option>
            <option class="options" value="El Jadida">El Jadida</option>
            <option class="options" value="Beni Mellal">Beni Mellal</option>
            <option class="options" value="Ait Melloul">Ait Melloul</option>
            <option class="options" value="Nador">Nador</option>
            <option class="options" value="Dar Bouazza">Dar Bouazza</option>
            <option class="options" value="Taza">Taza</option>
            <option class="options" value="Settat">Settat</option>
            <option class="options" value="Berrchid">Berrchid</option>
            <option class="options" value="Khemisset">Khemisset</option>
            <option class="options" value="Inezgane">Inezgane</option>
            <option class="options" value="Ksar El Kebir">Ksar El Kebir</option>
            <option class="options" value="Larache">Larache</option>
            <option class="options" value="Guelmim">Guelmim</option>
            <option class="options" value="Khenifra">Khenifra</option>
            <option class="options" value="Berkane">Berkane</option>
            <option class="options" value="Taourirt">Taourirt</option>
            <option class="options" value="Bouskoura">Bouskoura</option>
            <option class="options" value="F9ih ben salah">F9ih ben salah</option>
            <option class="options" value="Dcheira El Jihadia">Dcheira El Jihadia</option>
            <option class="options" value="Oued Zem">Oued Zem</option>
            <option class="options" value="El Kelaa Des Sraghna">El Kelaa Des Sraghna</option>
            <option class="options" value="Sidi Slimane">Sidi Slimane</option>
            <option class="options" value="Errachidia">Errachidia</option>
            <option class="options" value="Guercif">Guercif</option>




          </select>
        </div>

          <div>
            <label class="labels" for="pays"> pays : </label>
            <select id="ngpays" class="OptionInput" name="pays"  placeholder="Choisir votre pays"required>
              <option class="options" value="MAROC">Maroc</option>
            

            </select>
          </div>
        </div>

        <div class="DG">
        <div>
          <label class="labels" for="Villedenaissance"> Ville de Naissance: </label>
          <select id="ngvdn"class="OptionInput" name="Villedenaissance"  placeholder="Choisir votre Ville de naissance" required>
            <option class="options" value="CASABLANCA">Casablanca</option>
            <option class="options" value="MEKNES">meknes</option>
            <option class="options" value="FES">Fes</option>
            <option class="options" value="PARIS">Paris</option>
            <option class="options" value="BRUXELLES">Bruxelles</option>
            <option class="options" value="NYC">New York</option>
            <option class="options" value="TANGER">Tanger</option>

          </select>
        </div>
        
        <div>
          <label for="nom" class="labels">Adresse</label>
          <input  id="ngadr"c type="text" class="TextInput is-uppercase" name="Adresse" placeholder="Adresse du foyer"required>
        </div>
    

        </div>


        <div class="TG">
              <div>
                <label class="labels" for="Bdate">Date de naissance</label>

                <input  id="date" type="date" name="Bdate"
                min="1960-01-01" placeholder="Date de naissance" required>
                
              </div>

              <div>
                <label class="labels" for="Zipcode">Code postale</label>
                <input type="number" class="TextInput NumberInput is-uppercase" name="Zipcode" maxlength='6' placeholder="e.g 12345" required>
              </div>

              <div>
                <label class="labels" for="Zipcode">Numero CIN :</label>
                <input type="text" class="TextInput NumberInput is-uppercase" name="Cin"  maxlength='7' placeholder="e.g RY2710" required>
              </div>
        </div>

        <div class="DG">
              <div>
                <label class="labels" for="email">Adresse E-mail : </label>
                <input type="email" class="TextInput is-uppercase" name="email"  maxlength='50' placeholder="e.g University@gmail.com" value={{this.Username}} required>
              </div>

        </div>


        <div class="TGF">
          <div></div>
          <div></div>
          <div class="NextBtn">
            <button class="Cancelbtn button is-danger" (click)="cancelForm()"> Annuler</button>
           
            <div>
  
              <button class="Cancelbtn button is-warning" (click)="SaveOnlyForm()"> 
                <i class="fa-solid fa-pause"></i>
                Continuer Plus tard
              </button>
  
            </div>
  
            <button class="Nextbtn button is-dark" (click)="SaveForm(3)">Sauvegarder et continuer</button>
          </div>
        </div>



        </div>





    </DIV>

    <DIV id="f3" class="container PageForm">

      <div class="Formwrapper">

       <div></div>

        <div class="SG2 whitebox">

          <div class="diplomestatus">
            <label class="labels" for="agree" required>  Avez-vous obtenu un diplôme à la fin de vos études secondaires?:</label>
            
                      <br> 
                    <input type="radio"
                          name="agree" 
                          value="1"> J'ai déjà obtenu mon diplôme d'études secondaires ou mon attestation provisoire de fin d'études  
                  <br>
                    <input type="radio"
                          name="agree" 
                          value="2">  je suis en dernière année de secondaire
                    <br>
                    <input type="radio"
                          name="agree" 
                          value="3">    je suis en dernière année de secondaire Je n'ai pas de diplôme d'études secondaires
                  
      
          </div>
            
        </div>

        <div class="SG2 whitebox">
          <div>
              <label class="labels" for="DateDefinDeDiplome">  Date de fin d'études secondaires : </label>
              <input required type="date" class="TextInput is-uppercase" name="DateDefinDeDiplome">
          </div>

        </div>
       
        <div class="SG2 whitebox">
          <div>
              <label class="labels" for="Schoolname"> Nom de l'établissement </label>
              <input required type="text" class="TextInput MediumInput is-uppercase" name="Schoolname">
          </div>

        </div>
    
        <div class="SG2 whitebox">
          
        <div class="TG SmG">

          <div>
                <label class="labels" for="SchoolStreet"> Rue </label>
                <input required type="text" class="TextInput LargeInput is-uppercase"  maxlength ="80"name="Street" placeholder="Rue">
            </div>

            <div>
                <label class="labels" for="SchoolNum"> Numero </label>
                <input required type="number" class="TextInput LargeInput is-uppercase" maxlength ="7" name="SchoolNum" placeholder="Numero">
            </div>

            <div>
                <label class="labels" for="SchoolBp"> Boîte postale </label>
                <input required type="number" class="TextInput MediumInput is-uppercase"  maxlength ="7" name="SchoolBp" placeholder="Boîte Postale">
            </div>

            <div>
                <label class="labels" for="SchoolCountry"> Pays </label>
                <input required type="text" class="TextInput LargeInput is-uppercase" name="SchoolCountry" placeholder="Pays">
            </div>

            <div>
                <label class="labels" for="SchoolZip">Code Postal </label>
                <input required type="number" class="TextInput MediumInput is-uppercase" name="SchoolZip" placeholder="Code Postal">
            </div>

            <div>
                <label class="labels" for="SchoolLocality"> Localité :</label>
                <input required  type="text" class="TextInput LargeInput is-uppercase" name="SchoolLocality" placeholder="Localité">
            </div>

        </div>

        
      </div>
      
      <div class="SG2 SmG whitebox">
      Quel a été votre résultat de fin d'études secondaires ? Veuillez copier le résultat tel qu'il apparaît sur le relevé de notes final.

      </div>

      <div class="QG">
        
      <div class="SG2 SmG whitebox">

        <div class="FirstBox Bx">
          <p class="titleOfBox">Résultats exprimés en % : </p>
          <input required type="number" class="TextInput  is-uppercase" name="resultinpercentage" placeholder="">
        </div>
      </div>

      <div class="SG2 SmG whitebox">
        <div class="FirstBox Bx">
          <p class="titleOfBox">Résultats exprimés en notes (ex. 16/20) : </p>
          <input  required type="number" class="TextInput  is-uppercase" name="resultinpercentage" placeholder="">
        </div>
      </div>

      <div class="SG2 SmG whitebox">
        <div class="ThirdBox Bx">
          <p class="titleOfBox">Résultats exprimés en mentions : </p>
          <input required type="text" class="TextInput  is-uppercase" name="resultinpercentage" placeholder="">
        </div>
      </div>

      <div class="SG2 SmG whitebox">
          <div class="FourthBox Bx">
          <p class="titleOfBox">Résultats exprimés en lettres : </p>
          <input required  type="text" class="TextInput  is-uppercase" name="resultinpercentage" placeholder="">
        </div>
      </div>
      

      </div>

      <div class="SG2 SmG whitebox">
          <label class="labels" for="lang"required> Régime linguistique : : </label>
            
          <br> 
          <input class="optionpad5" type="radio"
                name="lang" 
                value="fr"> Français
        <br>
          <input class="optionpad5" type="radio"
                name="lang" 
                value="eng">  English
          </div>
              
        <div class="TGF">
          <div></div>
          <div></div>
          <div class="NextBtn">
            <button class="Cancelbtn button is-danger" (click)="cancelForm()"> Annuler</button>
           
            <div>
  
              <button class="Cancelbtn button is-warning" (click)="SaveOnlyForm()"> 
                <i class="fa-solid fa-pause"></i>
                Continuer Plus tard
              </button>
  
            </div>
  
            <button class="Nextbtn button is-dark" (click)="SaveForm(4)">Sauvegarder et continuer</button>
          </div>
        </div>



      </div>

    </DIV>

    <DIV id="f4" class="container PageForm">

      <div class="Formwrapper">



        <div class="SG2 whitebox">
          <div class="uploadFileTextinfo">
            <p class="Info">Veuillez télécharger votre attestation de baccalauréat de la même année ci-dessous</p>
          </div>

          <div class="UploadBox">

            <div class="addbtncontainer">
            <input required type="file"  accept=".pdf" multiple ="False" name="upload" id="upload" (change)="addfile($any($event).target.files);" class="PlusIcon button is-success is-hover" required/>
            
            <label class="filelabel" for="upload">Choose File</label>

          

            </div>

              <div class="view">
              <a id="link" download style="display: none"></a>

              </div>
            <div class="FilesListContainer">


              <div class="FilesInfo"> 



              </div>

              
            </div>

          </div>
        </div>

        <div></div>

        <div></div>
    

        <div class="TGF">
          <div></div>
          <div></div>
          <div class="NextBtn">
            <button class="Cancelbtn button is-danger" (click)="cancelForm()"> Annuler</button>
           
            <div>
  
              <button class="Cancelbtn button is-warning" (click)="SaveOnlyForm()"> 
                <i class="fa-solid fa-pause"></i>
                Continuer Plus tard
              </button>
  
            </div>
  
            <button class="Nextbtn button is-dark" (click)="SaveForm(5)">Sauvegarder et continuer</button>
          </div>
        </div>


      </div>

    </DIV>

    <DIV id="f5" class="container PageForm">

      <div class="Formwrapper">


        <div class="SG2">

          <div class="missinginfoContainer">
              <p class="textmissinginfo">Ces Informations sont requises pour valider l'inscription :</p>

              <ul class="missinginfoList" id="infolist">

            </ul>


          </div>
        </div>
    
        <div class="SG2">

        </div>

        <div class="SG2">

        </div>


        <div class="TGF">
          <div></div>
          <div></div>
          <div class="NextBtn">
            <button class="Cancelbtn button is-danger" (click)="cancelForm()"> Annuler</button>
           
            <div>
  
              <button class="Cancelbtn button is-warning" (click)="SaveOnlyForm()"> 
                <i class="fa-solid fa-pause"></i>
                Continuer Plus tard
              </button>
  
            </div>
  
            <button class="Nextbtn button is-success finalvalidation" disabled (click)="ValidateForm()">Valider Votre Inscription</button>
          </div>
        </div>


      </div>

    </DIV>
    </form>

  
  `,
  styleUrls: ["candidature.component.css"
  ],
})
export class CandidatureComponent implements OnInit {
  id:any;
  Username:any;

  file:any;
  filename:any;
  filesize:any;

  Candidate: any;

  admissionMessage:any;

  etape:any;
  
  
  constructor(private router :Router ,private fetchcandidate : CandidatRegistrationService, private AdmissionService :AdmissionServiceService, private SessionManager :LocalStorageServiceService ) { }
  

  
  ngOnInit(): void {

    this.id = this.SessionManager.getItem("UserID");
    this.Username = this.SessionManager.getItem("UserEmail");

    if(this.SessionManager.getItem("UserID")==null){
      this.router.navigate(['/login']);
      
    }



    

  }
  
  Admissions : AdmissionData = new AdmissionData("", "", "", true,"","","","Hiver","Complete");
  
  cancelForm() {
    window.location.href = "../";
    return false
  }

  ValidateForm() {
    this.etape = 6;
    
    this.Admissions.etape = this.etape;


    this.Admissions.etudesPostBac = true;

  
    console.log(this.Admissions.choixFilierePrincipale);
    console.log(this.Admissions.choixFiliereSecondaire);
    console.log(this.Admissions.etudesPostBac);

      let resp = this.AdmissionService.RegisterAdmission(this.Admissions,this.id);
      resp.subscribe((data) => this.admissionMessage = data);
       console.log(this.admissionMessage);
    if(this.admissionMessage != HttpStatusCode.InternalServerError ){
      this.SessionManager.setItem("admissioned","1");
      this.router.navigate(['/paiement']);
  
      
    }   

  


  }

  SaveOnlyForm() {
    /* save only here */
    window.location.href = "../";
    return false
  }
  SaveForm(element: number) {
    /* saving  code here */

    this.activeForm((element).toString())

    return false
  }


  addfile( files : FileList) {
    
    this.removeFileinfos();

    console.log(files[0]);
    if(files[0]){

      this.filename =files[0].name;
      this.filesize =files[0].size.toString().slice(3 - files[0].size.toString().length );
      
      this.filesize  += " KO";

      this.generatefileinfo(this.filename,this.filesize, files[0]);
      
      this.file = files[0];
    }
  }
  removefile(){

    
  }

  activeForm(element: string) {


     this.etape = "1";
    let Form = document.getElementById(element);

    let FormCircle = document.getElementsByClassName("circl");
    let Circle = document.getElementsByClassName('circlbtn')
    let FormPages = document.getElementsByClassName('pages');
    let Forms = document.getElementsByClassName('PageForm');
    for (var i = 1; i <= 5; i++) {


      if (element === i.toString()) {

        this.etape = i.toString();

        Forms[i - 1].setAttribute('style', 'background-color: #93a4f17d; display: block;');

        FormPages[i - 1].setAttribute('id', 'activeForm');
        Circle[i - 1].setAttribute('id', 'activeCircle');

      } else {

        Circle[i - 1].setAttribute('id', 'inactifcircle');
        Forms[i - 1].setAttribute('style', 'display:none');
        FormPages[i - 1].setAttribute('id', 'inactifForm');
        FormCircle[i - 1].setAttribute('id', 'inactifCircle');

      }

    }
    if(element === "5"){
      this.checkinfos();
    }

    return false
  }
  checkinfos(){
    let errors = 0;
    let DivsContainer = (<HTMLInputElement>document.getElementById("infolist"));
    DivsContainer.innerHTML  ="";
    var PrimaryBranch = (<HTMLInputElement>document.getElementById("filliereA")).value;
    //console.log(PrimaryBranch);

    var SecondaryBranch = (<HTMLInputElement>document.getElementById("filliereB")).value;
   // console.log(SecondaryBranch);



   if( PrimaryBranch ==""){

    this.GenerateSingleInfo("Choix de filliere principale",'fa-solid fa-books');
    errors +=1;
   }

   if(SecondaryBranch==""){
    this.GenerateSingleInfo("Choix de filliere Secondaire",'fa-solid fa-books');
    errors +=1;

   }

   if(!this.file){
    this.GenerateSingleInfo("Baccalauréat","fa-solid fa-books");
    errors +=1;

   }

   if(errors == 0){
    let btn = (<HTMLButtonElement>document.getElementsByClassName("finalvalidation")[0]);
    btn.disabled = false;
  }
}

GenerateSingleInfo(textvalue:any, icon :any){ //generate single line missing info in the form
  if(icon ==""){
    icon="fa-solid fa-user";
  }

  var li = document.createElement("li");
  var div = document.createElement("div");
  div.setAttribute("class","missingInfoElement clickable");
  var i = document.createElement("i");
  i.setAttribute("class",icon);
  
  li.setAttribute("class","listofitems");

  var p= document.createElement("p");
  p.innerText = textvalue;
  var ul =(<HTMLInputElement>document.getElementById("infolist"));
  
  div.appendChild(i);
  div.appendChild(p);
  li.appendChild(div);
  ul.appendChild(li);

  div.setAttribute("style","display:flex;flex-direction:row; align-items:center;gap:5px; color:red;");

}

removeFileinfos(){
  var Finfo = document.getElementsByClassName("FilesInfo")[0];

    Finfo.innerHTML=""; // remove all children
  
  
}

generatefileinfo(filename: any, filesize: any,MyFile:File) {


  var FilesInfo = document.getElementsByClassName("FilesInfo")[0];
  var FileQG = document.createElement("div");
  var FName = document.createElement("div");
  var FSize = document.createElement("div");
  var Bac = document.createElement("div");
  
  FileQG.setAttribute("class","File QG");
  FName.setAttribute("class","Fname");
  FSize.setAttribute("class","Fsize");
  Bac.setAttribute("class","bac");

  FilesInfo.appendChild(FileQG);

  FileQG.appendChild(FName);
  FileQG.appendChild(FSize);
  FileQG.appendChild(Bac);

  FName.innerText = filename;
  FSize.innerText = filesize;

   var Icons = document.createElement("div");
  var FileIcon = document.createElement("div");
  var button = document.createElement("button");
  var i     = document.createElement('i');


  Icons.setAttribute("class","Icons");
  FileIcon.setAttribute("class","FileIcon");

  var Icons = document.createElement("div");
  var FileIcon = document.createElement("div");
  var button = document.createElement("button");
   var i     = document.createElement('i');
 
   var FileIcon2 = document.createElement("div");
   var button2 = document.createElement("button");
   var i2     = document.createElement('i');

   var FileIcon3 = document.createElement("div");
   var button3 = document.createElement("button");
  var i3     = document.createElement('i');
  
  Icons.setAttribute("class","icd");
  
  button.setAttribute("class","button is-success is-small");
  i.setAttribute("class","fa-solid fa-download");
   
  
   
   button2.setAttribute("class","button is-info is-small");
   i2.setAttribute("class","fa-solid fa-eye");
   FileIcon2.setAttribute("class","FileIcon");

   button3.setAttribute("class","button is-danger is-small");
   FileIcon3.setAttribute("class","FileIcon");
   i3.setAttribute("class","fa-solid fa-xmark");


   button3.addEventListener('click',  () => {
    this.removeFileinfos();
   });

   button.addEventListener('click', function () {  // view file
  
    let objectURL = URL.createObjectURL(MyFile);
    let link =  (<HTMLLinkElement>document.getElementById("link"));
    link.href = objectURL;
    link.click();
  })

  button2.addEventListener('click',function() {
    let PdfViewerContainer = (<HTMLDivElement>document.getElementsByClassName("view")[0]);
    let fileReader = new FileReader();
    fileReader.readAsDataURL(MyFile);
    fileReader.addEventListener("load", function () {
      var string =  String( this.result);
      var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe> <style>  html, body { border: 0px;margin: 0px;padding: 0px;} </style>"
      var x = window.open();
      x?.document.open();
      x?.document.write(iframe);
      x?.document.close();
    
    });    
  });
   
   button.appendChild(i);
   FileIcon.appendChild(button);
   Icons.appendChild(FileIcon);
   
   button2.appendChild(i2);
   FileIcon2.appendChild(button2);
   Icons.appendChild(FileIcon2);
   
   
   button3.appendChild(i3);
   FileIcon3.appendChild(button3);
   Icons.appendChild(FileIcon3);
   Icons.setAttribute("style","display:flex;flex-direciton:row;gap:5px;")
   FileQG.setAttribute("style","display:flex;flex-direciton:row;gap:5px;justify-content: space-between;")



  
   Icons.appendChild(FileIcon)
   
   FileIcon.appendChild(button);
   button.appendChild(i);
   FileQG.appendChild(Icons);

}


}
