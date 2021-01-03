import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatExpansionPanel } from '@angular/material';

export class CSVRecord {  
  public timestamp: any;  
  public value: number;  
     
} 

@Component({
  selector: 'app-import-csv',
  templateUrl: './import-csv.component.html',
  styleUrls: ['./import-csv.component.css']
})


export class ImportCsvComponent implements OnInit {




  displayedColumns: string[] = [ 'timestamp', 'value'];
  dataSource: MatTableDataSource<CSVRecord>;
  records:any;
  registers:CSVRecord[];
  results: { [key: string]: number } = {};

  @ViewChild('csvReader') csvReader: any; 
  @ViewChild(MatPaginator, {read:false }) paginator: MatPaginator;
  @ViewChild(MatSort, {read:false }) sort: MatSort;
  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel
  constructor(private httpService:HttpService) { }

  @Output() newResults = new EventEmitter<{ [key: string]: number }>();

  ngOnInit() {
  }

  unloadData(){

    if (this.records){

     this.records = [];
     this.registers =[];
     this.dataSource.data.splice(0);
     this.dataSource._updateChangeSubscription();
     this.dataSource = new MatTableDataSource(this.registers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


  }
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
        csvRecord.value = Number(curruntRecord[1].trim());    
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


      this.results = ans;


      this.newResults.emit(ans)


    })


  }

  // sendDataList(){


  //   this.httpService.calculateMean(this.records).subscribe((ans:any) => {
  //     console.log(ans)
  //   })

  //   this.httpService.calculateSD(this.records).subscribe((ans:any) => {
  //     console.log(ans)
  //   })

  //   this.httpService.calculateVar(this.records).subscribe((ans:any) => {
  //     console.log(ans)
  //   })


  // }


  







}
