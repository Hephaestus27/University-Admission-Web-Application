import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard2',
  template: `
        <app-logged-header></app-logged-header>

        <div class="container MainContainer">
            <div class="Grid">
              
              <div class="LeftGrid">
                <div class="TitleContainer">
                  <h2 class="Title">
                    Vue d'ensemble des cours
                  </h2>
                </div>
                <div class="CoursesContainer">

                <div class="CourseGrid">
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                  <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                    <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">

                    <h3 class="CrsTitle">
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                  <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                  <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">
                    <h3 class="CrsTitle">
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                  <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                  <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">
                    <h3 class="CrsTitle">
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                    <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                  <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">
                    <h3 class="CrsTitle">
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                  <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                  <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">
                    <h3 class="CrsTitle">
                      
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                <div class="Coursebox" (click)="RedirectTO()">
                  <div class="CourseImg">

                  <img src="../assets/images/Cours.jpg" alt="COURSE">

                  </div>
                  <div class="CourseTitle">
                  <p class="matricule">MAT-2910 / 2022</p>
                  <hr class="navbar-divider">
                    <h3 class="CrsTitle">
                      INFORMATIQUE | 1 
                    </h3>
                  </div>
                  
                </div>
                </div>
                  </div>
              </div>

              <div class="RightGrid">
                <div class="TitleContainer">
                  <h2 class="Title">
                    Calendrier des Examens
                  </h2>
                </div>
                <div class="CalendarContainer">
                  <app-calendar></app-calendar>
                </div>
              </div>
            </div>
        </div>

        <app-footer></app-footer>
        <router-outlet></router-outlet>

  `,
  styles: [
  ],
  styleUrls: [
    "dashboard2.component.css"
  ]
})
export class Dashboard2Component implements OnInit {

  constructor(public router:Router) { 
    
  }

  ngOnInit(): void {
    
  }
  RedirectTO(){
    this.router.navigate(['../user/course']);

  }
 

}
