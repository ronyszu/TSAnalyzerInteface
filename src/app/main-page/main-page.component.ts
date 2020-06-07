import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export class CSVRecord {  
  public timestamp: any;  
  public value: any;  
     
} 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  displayedColumns: string[] = [ 'timestamp', 'value'];
  dataSource: MatTableDataSource<CSVRecord>;
  records:any;
  registers:CSVRecord[];

  @ViewChild('csvReader') csvReader: any; 
  @ViewChild(MatPaginator, {read:false }) paginator: MatPaginator;
  @ViewChild(MatSort, {read:false }) sort: MatSort;
  constructor(private httpService:HttpService) { }

  
  ngOnInit() {


  }


  csvImporter($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.registers = this.records;
        this.dataSource = new MatTableDataSource(this.registers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    
        
      };  
  
      reader.onerror = function () {  
        console.log('An error occured while reading the selected file');  
      };  
  
    } else {  
      alert("Please import a valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.timestamp = curruntRecord[0].trim();  
        csvRecord.value = curruntRecord[1].trim();    
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  

  sendDataCSV(){


    this.registers = this.records;

    this.httpService.sendLoadedDataCSV(this.registers).subscribe((ans:any) => {
      console.log(ans)
    })


  }

  sendDataList(){


    this.httpService.calculateMean(this.records).subscribe((ans:any) => {
      console.log(ans)
    })

    this.httpService.calculateSD(this.records).subscribe((ans:any) => {
      console.log(ans)
    })

    this.httpService.calculateVar(this.records).subscribe((ans:any) => {
      console.log(ans)
    })


  }


  





}
