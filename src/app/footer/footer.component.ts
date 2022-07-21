import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="footer" style="padding:30px;margin-top:20px;">
  <div class="content has-text-centered">
    <p>
      <strong>University</strong> Project , The source code is licensed
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
