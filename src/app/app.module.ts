import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostulerComponent } from './postuler/postuler.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { HomeComponent } from './home/home.component';
import { SeconnecterComponent} from './seconnecter/seconnecter.component';
import { UdashboardComponent } from './udashboard/udashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainComponent } from './main/main.component';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { NotesComponent } from './notes/notes.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { CandidatRegistrationService } from './candidat-registration.service';
import { UserRegisterService } from './user-register.service';
import { LoginService } from './login.service';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { LocalStorageServiceService } from './local-storage-service.service';
import { UtilisateurRegistariatComponent } from './utilisateur-registariat/utilisateur-registariat.component';
import { ComptableDashboardComponent } from './comptable-dashboard/comptable-dashboard.component';
import { PaiementComponent } from './paiement/paiement.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecretairehomeComponent } from './secretairehome/secretairehome.component';
import { ComptablehomeComponent } from './comptablehome/comptablehome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostulerComponent,
    SeconnecterComponent,
    ContacteznousComponent,
    HomeComponent,
    UdashboardComponent,
    Dashboard2Component,
    CandidatureComponent,
    MainComponent,
    LoggedHeaderComponent,
    CalendarComponent,
    FooterComponent,
    CourseComponent,
    ProfileComponent,
    NotesComponent,
    UserHeaderComponent,
    AuthGuardComponent,
    UtilisateurRegistariatComponent,
    ComptableDashboardComponent,
    PaiementComponent,
    EmployeeloginComponent,
    SecretairehomeComponent,
    ComptablehomeComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,   
  ],
  
  providers: [CandidatRegistrationService, UserRegisterService, LoginService, LocalStorageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
