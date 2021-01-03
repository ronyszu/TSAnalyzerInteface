import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord, ImportCsvComponent } from '../import-csv/import-csv.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  // @ViewChild(ImportCsvComponent) importCSV: ImportCsvComponent;
  // @ViewChild(ReportComponent) report: ReportComponent;
  // @ViewChild(IndicatorComponent) indicator: IndicatorComponent;

  constructor() { }

  ngOnInit() {
  }


  // toggleCSV(){

  //   this.importCSV.expansionPanel.toggle();

  //   //close other windows, if they are open
  //   this.report.expansionPanel.close()
  //   this.indicator.expansionPanel.close()

  // }


  // toggleConfig(){

  // }


  // toggleReports(){



  // }




}
