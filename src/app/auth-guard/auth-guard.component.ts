import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-guard',
  template: `
    <p>
      auth-guard works!
    </p>
  `,
  styles: [
  ]
})
export class AuthGuardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
