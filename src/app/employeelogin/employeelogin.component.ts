import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { LoggedUser } from '../LoggedUser';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-employeelogin',
  template:`

<section class="hero is-info is-fullheight">
      <div class="hero-body ">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box"  (submit)="LoginUser($event)">
                  <div class="title  has-text-centered" style="color:black;text-transform: uppercase; font-family: 'poppins',sans-serif;"> Se Connecter</div>
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control has-icons-left">
                    <input type="email" placeholder="e.g. bobsmith@gmail.com" [(ngModel)] = "Luser.email"  id="email" name="email" class="input" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control has-icons-left">
                    <input type="password" placeholder="*******" [(ngModel)] = "Luser.password" name="password" id="pass" class="input" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-eye" id="eyepwd"e style="position: absolute;left: -25px;" onclick="ShowHidepwd(this);" onmouseover="hover();"></i>
                      <script>
                          function ShowHidepwd(element){
                              if( document.getElementById("pwdd").type == "text"){ 
                                  
                                  document.getElementById("pwdd").type = "password";
                                  
                              }else{
                                  document.getElementById("pwdd").type = "text";
                              }
                          }
                          function hover(){
                              document.getElementById(" eyepwd").cursor="pointer";
                          }
                      </script>
                    </span>
                    <span id="ErrorUser" style="display:none;" class="has-text-danger is-size-7	pl-3">Invalid Email or Password</span>

                  </div>
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <div class="field">
                  <button class="button is-info">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-outlet></router-outlet>
    `,

  styleUrls: ["employeelogin.component.css"
  ]
})
export class EmployeeloginComponent implements OnInit {
  Username: any;

  constructor( private router: Router , private  LoginService: LoginService, private SessionManager : LocalStorageServiceService){
  }
  Luser: LoggedUser = new LoggedUser("","");
  
  LoginError :any;
  SessionData : any
  sessioname:any

  async LoginUser(ev: any){
    

    ev.preventDefault();
   

    
    
      let resp = this.LoginService.Employeecl(this.Luser);
      resp.subscribe((UserData) => {
        this.LoginError = UserData

      setTimeout(() => {
        console.log(this.LoginError);
    if( ( this.LoginError != 0) && ( this.LoginError !=  undefined)) {
      this.SessionManager.setItem("UserEmail",this.Luser.email);
      this.SessionManager.setItem("ServiceID",this.LoginError);

      this.sessioname = this.SessionManager.getItem("UserEmail");
      this.sessioname = this.SessionManager.getItem("ServiceID");
      


  
    }else if(this.LoginError != undefined){
      let pass = document.getElementById("pass");
      let em =  document.getElementById('email');
      let errormessage = document.getElementById('ErrorUser');

      pass?.setAttribute('class','input is-danger');
      em?.setAttribute('class','input is-danger');
      errormessage?.setAttribute('style','display:block');
    }
  }, 500);
    

    if(UserData.toString() == "1"){
      this.router.navigate(['/secretairedashboard']);

    }else if(UserData.toString() == "2"){
      this.router.navigate(['/comptable']);

    }
      });
  }
  
    ngOnInit() {
      if (  this.SessionManager.getItem("ServiceID")  != null){
        this.Username = this.SessionManager.getItem("ServiceID");
        this.router.navigate(['/secretairedashboard']);
      }else{
        this.router.navigate(['/employeelogin']);
      }
    }

}


