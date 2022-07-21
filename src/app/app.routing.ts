import { Routes , RouterModule } from '@angular/router'


import { PostulerComponent } from './postuler/postuler.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { HomeComponent } from './home/home.component';
import { SeconnecterComponent} from './seconnecter/seconnecter.component';
import { UdashboardComponent } from './udashboard/udashboard.component';
import { Dashboard2Component} from './dashboard2/dashboard2.component'
import { CandidatureComponent } from './candidature/candidature.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { NotesComponent } from './notes/notes.component';
import { CourseComponent } from './course/course.component';
import { PaiementComponent } from './paiement/paiement.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecretairehomeComponent } from './secretairehome/secretairehome.component';
import { ComptablehomeComponent } from './comptablehome/comptablehome.component';

const routes : Routes = [
    { path : 'login' , component : SeconnecterComponent},
    { path : 'postuler' , component : PostulerComponent},
    { path : 'contactus' , component : ContacteznousComponent},
    { path : 'userdashboard' , component : UdashboardComponent},
    { path : 'dashboard' , component : Dashboard2Component},
    { path : 'candidature' , component : CandidatureComponent},
    { path : 'home' , component : HomeComponent},
    { path : 'user/profile' , component : ProfileComponent},
    { path : 'user/notes' , component : NotesComponent},
    { path : 'user/course' , component : CourseComponent},
    { path : 'paiement' , component : PaiementComponent},
    { path : 'employeelogin' , component : EmployeeloginComponent},
    { path : 'secretairedashboard' , component : SecretairehomeComponent},
    { path : 'comptable' , component : ComptablehomeComponent},
    
    {path: '',component: HomeComponent},

    
    { path : '*' , redirectTo :'home'},

];

export const AppRoutingModule = RouterModule.forRoot(routes);