import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from './chartAreaDemo';
import { chartPieDemo } from '../dashboard/chartPieDemo';
import { chartBarDemo } from './chartBarDemo';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();

    // Set new default font family and font color to mimic Bootstrap's default styling
    chartBarDemo();
  }

}

