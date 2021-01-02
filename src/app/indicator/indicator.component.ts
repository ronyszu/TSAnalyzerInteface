import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel

  constructor() { }

  ngOnInit() {
  }

}
