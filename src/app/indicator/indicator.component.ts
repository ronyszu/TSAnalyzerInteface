import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  meanChecked:boolean = true;
  medianChecked:boolean = true;
  modeChecked:boolean = true;
  skewnessChecked:boolean = true;
  kurtosisChecked:boolean = true;
  lowerQuartileChecked:boolean = true;
  upperQuartileChecked:boolean = true;

  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel

  constructor() { }

  ngOnInit() {
  }

}
