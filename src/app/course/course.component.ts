import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
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

      <a class="navbar-item" routerLink="../../dashboard">
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
          <a class="navbar-item" routerLink="../../">
            Se deconnecter
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>



    <div class="MainContainer">
            <div class="Grid">
                <div class="LeftGrid">
                  <div class="CourseDateContainer">
                    <div class="DateContainer">
                      <ul>
                        <li>
                          <div class="DateElement">
                          <i class="fa-solid fa-graduation-cap"></i>
                            <p class="DateElementName">Cours A</p>
                          </div>  
                        </li>

                        <li>
                          <div class="MonthElement" (click)="Toogle(0)">
                            <i class="fas fa-calendar-alt"></i>
                            <p class="DateElementName">Mois</p>
                            <i class="fa-solid fa-angle-down"></i>

                          </div>  
                            <ul class="months 0" id="months">
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Janvier</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Fevrier</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Mars</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Avril</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Mai</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Juin</p>
                                </div>
                              </li>
                              
                              <li>
                                <div class="monthElement">
                                  <i class="fas fa-calendar-alt"></i>
                                  <p class="Month">Juillet</p>
                                </div>
                              </li>
                              
                            </ul>
                        </li>

                          <li>
                            <div class="CourseElement" (click)="Toogle(1)">
                              <i class="fa-solid fa-book"></i>
                              <p class="CourseElementName">Mes Cours</p>
                              <i class="CourseAngle fa-solid fa-angle-down"></i>
                            </div>
                            
                              <ul class="CoursesElements 0" id="courses">
                                <li class="Course">
                                <i class="fas fa-book-open"></i>
                                <p>Cours A</p>
                                </li>

                                <li class="Course">
                                <i class="fas fa-book-open"></i>
                                <p>Cours B</p>
                                </li>

                                <li class="Course">
                                <i class="fas fa-book-open"></i>
                                <p>Cours C</p>
                                </li>

                                <li class="Course">
                                <i class="fas fa-book-open"></i>
                                <p>Cours D</p>
                                </li>
                              </ul>
                          </li>
        


                      </ul>
                    </div>

                  </div>
                </div>
              <div class="MiddleGrid">
                <div class="TitleContainer">
                  <h2 class="Title">
                    Cours : Cours Template A
                  </h2>
                </div>
                <div class="CoursesContainer">

                <div class="CourseGrid">
                <div class="Coursebox">
                
                  <div class="CourseTitle">
                    <p class="matricule">Janvier 2022</p>

                    <div class="filesContainer">

                      <div class="fileContainer">
                        <i class="fa-solid fa-file"></i>
                        <p class="FileName">DummyFile.Pdf</p>
                      </div>

                      <div class="fileContainer">
                        <i class="fa-solid fa-image"></i>
                        <p class="FileName">DummyImage.Jpg</p>
                      </div>

                    </div>
                  <hr class="navbar-divider CourseDivider">

                    <h3 class="CrsTitle">

                  </h3>
                  </div>
                  
                </div>
               
                
                <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Fevrier 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">
                 
                  </h3>
                </div>
                
              </div>
              <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Mars 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">

                </h3>
                </div>
                
              </div>
              <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Avril 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">

                </h3>
                </div>
                
              </div>
              <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Mai 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">

                </h3>
                </div>
                
              </div>
              <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Juin 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">

                </h3>
                </div>
                
              </div>
              <div class="Coursebox">
                
                <div class="CourseTitle">
                  <p class="matricule">Juillet 2022</p>
                <hr class="navbar-divider CourseDivider">

                  <h3 class="CrsTitle">

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
  `,
  styleUrls: ['course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Toogle(Elem: number) {
    var Mnths = document.getElementById('months');
    var Courses = document.getElementById('courses');


    var MonthsStatus = Mnths?.getAttribute('class');
    var CoursesStatus = Courses?.getAttribute('class');


    if(Elem == 0){

      
      if (MonthsStatus == "months 0") {
  
        Mnths?.setAttribute('style', 'display:block;')
        Mnths?.setAttribute('class', 'months 1')
  
      } else {
        Mnths?.setAttribute('style', 'display:none;')
        Mnths?.setAttribute('class', 'months 0')
  
      }

    }
   else{
     
    if (CoursesStatus == "CoursesElements 0") {

      Courses?.setAttribute('style', 'display:block;')
      Courses?.setAttribute('class', 'CoursesElements 1')

    } else {
      Courses?.setAttribute('style', 'display:none;')
      Courses?.setAttribute('class', 'CoursesElements 0')

    }
   }
  }
}
