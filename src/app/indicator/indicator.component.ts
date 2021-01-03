import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { MatExpansionPanel } from '@angular/material';
import { isError, isUndefined } from 'util';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {


//criar array de booleanos e fazer for no html, pois todos chamam a mesma coisa

  meanChecked:boolean = true;
  medianChecked:boolean = true;
  modeChecked:boolean = true;
  skewnessChecked:boolean = true;
  sdChecked:boolean = true;
  varianceChecked:boolean = true;
  kurtosisChecked:boolean = true;
  lowerQuartileChecked:boolean = true;
  upperQuartileChecked:boolean = true;
  registers: { [key: string]: boolean } = {};

  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel

  @Output() wantedDict = new EventEmitter<{ [key: string]: boolean }>();

  constructor() { }

  ngOnInit() {
  }


calculationsToBeDone(checked: any){



  
if(isUndefined(this.registers[checked.source._elementRef.nativeElement.innerText])){


  this.registers["Mean"] = this.meanChecked;
  this.registers["Median"] = this.medianChecked;
  this.registers["Mode"] = this.modeChecked;
  this.registers["Skewness"] = this.skewnessChecked;
  this.registers["Kurtosis"] = this.kurtosisChecked;
  this.registers["Lower Quartile"] = this.lowerQuartileChecked;
  this.registers["Upper Quartile"] = this.upperQuartileChecked;
  this.registers["Standard Deviation"] = this.sdChecked;
  this.registers["Variance"] = this.varianceChecked;
}

this.registers[checked.source._elementRef.nativeElement.innerText] = checked.checked;

console.log(this.registers)

  this.wantedDict.emit(this.registers)
}




}
