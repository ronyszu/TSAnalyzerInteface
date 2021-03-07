import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatExpansionPanel, MatTableDataSource } from '@angular/material';

export interface result {
  //index: number;
  indicator:string;
  resultValue: number;

}


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel
  @Input() result: { [key: string]: number };
  @Input() wanted: { [key: string]: boolean };

  displayedColumns: string[] = [ 'indicator', 'resultValue'];
  resultDataSource: any;
  dataframeData: result[]=[];

  constructor() { }

  ngOnInit() {
  


  }

  ngOnChanges(changes: SimpleChanges){
    

    //if(!changes.firstChange){

    for (let i = 0; i < Object.values(this.result).length; i++) {
      let result = <result><any>({
        //index = i
        indicator: Object.keys(this.result)[i],
        resultValue: Object.values(this.result)[i],

      })
      


      if (this.wanted === undefined){

        this.wanted = {};
        
        this.wanted["Mean"] = true;
        this.wanted["Median"] = true;
        this.wanted["Mode"] = true;
        this.wanted["Skewness"] = true;
        this.wanted["Kurtosis"] = true;
        this.wanted["Lower Quartile"] = true;
        this.wanted["Upper Quartile"] = true;
        this.wanted["Standard Deviation"] = true;
        this.wanted["Variance"] = true;


      }


      if (this.wanted[result.indicator]){
        this.dataframeData.push(result)
      }
      



    }

    this.resultDataSource = new MatTableDataSource(this.dataframeData);

  //}
}

}
