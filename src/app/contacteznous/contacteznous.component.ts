import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacteznous',
  template: `
   <app-header></app-header>

   <div class="contactUs">

    <div class="Formcontainer">
      <div class="contactForm">
        
      <form class="Contform" action="">

      <div class="field">
  <label class="label has-text-white is-uppercase">Nom Complet</label>
  <div class="control">
    <input class="input" type="text" placeholder="Nom Complet">
  </div>
</div>

<div class="field">
  <label class="label has-text-white is-uppercase">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="e.g University@gmail.com" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label has-text-white is-uppercase">Objet</label>
  <div class="control">
    <input class="input" type="text" placeholder="Nom Complet">
  </div>
</div>

<div class="field">
  <label class="label has-text-white is-uppercase">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control has-text-white is-uppercase">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link is-uppercase">Envoyer</button>
  </div>
 
</div>





      </form>


    </div>
    </div>
   </div>
  `,
  styleUrls: ["contacteznous.component.css"],
})
export class ContacteznousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
