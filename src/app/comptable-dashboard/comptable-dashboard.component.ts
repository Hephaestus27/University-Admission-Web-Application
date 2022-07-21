import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptable-dashboard',
  template: `
    
    <div class="dashboardcontainer container">

      <div class="AdmissionsList"></div>
    </div>
  `,
  styleUrls:["comptable-dashboard.component.css"]
})
export class ComptableDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
