import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CSVRecord } from '../import-csv/import-csv.component';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  baseUrl: string = "https://localhost:44323/api/parameter" //TODO: make it general or appsettings

  constructor(private http: HttpClient) { }


  sendLoadedDataCSV(fileToSend: any) {

    return this.http.post(this.baseUrl + '/accordCalculation', fileToSend)

  }

}
