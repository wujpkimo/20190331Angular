import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from './chartAreaDemo';
import { chartPieDemo } from './chartPieDemo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

  linkToCharts() {
    this.router.navigateByUrl('/charts');
  }
  linkToTables() {
    this.router.navigateByUrl('/tables/5');
  }
}
