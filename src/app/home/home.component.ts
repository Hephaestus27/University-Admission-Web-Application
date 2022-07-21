import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  template:`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

<app-header> </app-header>
    <div class="HomeBody">
      
    <div class="DataContainer">

        <div class="Grid">
            <div class="LeftSide">
                <div class="TitleContainer">
                    <h2 class="Title">
                        Bienvenue A l'Université !
                    </h2>
                    <p class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut eum reiciendis nam, possimus
                        sed, reprehenderit odit, qui hic eveniet itaque voluptas! Tempora, modi vero blanditiis dolore
                        architecto maiores repellat.
                    </p>
                </div>
                <div class="Btncontainer mt-6">
                    <div class="button is-warning is-focused" style="width:60%;" routerLink="postuler">
                        S'inscrire
                    </div>
                </div>

            </div>
            <div class="lineSide">
                <hr class='dashed-border' style="border: none;">

            </div>
            <div class="RightSide">

                <div class="ImageContainer">
                    <img src="../../assets/images/Slider_2.jpg" alt="NO IMAGE CURRENTLY">

                    <div class="DataContainer ">
                        <div class="TextContainer bottom-text shaded">

                            <h2 class="ImgTtitle" bottom-text> TITLE EXAMPLE</h2>

                            <p class="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque officiis eius ex
                                amet, iusto sit dignissimos necessitatibus voluptatum eveniet enim omnis eum doloribus!
                                Possimus necessitatibus nobis delectus nisi tempore?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div class="Container">
            <div class="SecondSection">
                <div class="SectionTitle">
                    <div class="lineSideH">
                        <hr class='Hdashed' style="border: none;">
        
                    </div>

                    <h2 class="filliere">
                        NOS FILLIERES
                        
                    </h2>

                    <div class="studies">


                    <div class="StudiesGrid">
                        <div class="LeftStudy">
                            <div class="Studybox">
                                <div class="mainIcon">
                                <i class=" Studies-icons fa-solid fa-book"></i>
                                </div>
                                <h2 class="StudyTitle">
                                    Etudes d'ingénierie 

                                </h2>
                                <p class="Studydetails">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptates corporis sunt vero laborum nulla, alias deleniti. Ipsa perferendis recusandae, neque eum impedit temporibus, quidem rem mollitia deserunt sapiente doloremque!
                                </p>
                                <div class="brochure">
                                    <button class="bruchurebtn button is-warning is-outlined">Telecharger La brochure</button>
                                </div>

                            </div>
                        </div>
                        
                        <div class="MidStudy">
                            <div class="Studybox">
                            <div class="mainIcon">
                                <i class=" Studies-icons fa-solid fa-book"></i>
                                </div>
                                <h2 class="StudyTitle">
                                    Etudes Economiques

                                </h2>
                                <p class="Studydetails">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptates corporis sunt vero laborum nulla, alias deleniti. Ipsa perferendis recusandae, neque eum impedit temporibus, quidem rem mollitia deserunt sapiente doloremque!
                                </p>
                                <div class="brochure">
                                    <button class=" bruchurebtn button is-warning is-outlined">Telecharger La brochure</button>
                                </div>
                            </div>
                        </div>
                        <div class="RightStudy">
                        <div class="Studybox">
                        <div class="mainIcon">
                                <i class=" Studies-icons fa-solid fa-book"></i>
                                </div>
                                <h2 class="StudyTitle">
                            Etudes de droit
                                </h2>
                                <p class="Studydetails">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptates corporis sunt vero laborum nulla, alias deleniti. Ipsa perferendis recusandae, neque eum impedit temporibus, quidem rem mollitia deserunt sapiente doloremque!
                                </p>
                                <div class="brochure">
                                    <button class="bruchurebtn button is-warning is-outlined">Telecharger La brochure</button>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </div>
        <app-footer></app-footer>
    <router-outlet></router-outlet>


  `,


  styleUrls: ['./home.component.css']  ,
  }) 
export class HomeComponent{


}
