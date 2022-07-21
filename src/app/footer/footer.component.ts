import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="footer" style="padding:30px;margin-top:20px;">
  <div class="content has-text-centered">
    <p>
      <strong>University</strong> by <a href="https://github.com/Hephaestus27">Yassine SINDEL</a> and <a href="https://github.com/fati-es"> Fatima Zahra Essbai</a> The source code is licensed
    </p>
  </div>
</footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
