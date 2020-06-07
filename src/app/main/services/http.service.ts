import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CSVRecord } from 'src/app/main-page/main-page.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  baseUrl: string = "https://localhost:44323/api/parameter"

  constructor(private http: HttpClient) { }


  sendLoadedDataCSV(fileToSend: any) {

    return this.http.post(this.baseUrl + '/sendLoadedDataCSV', fileToSend)

  }

  calculateMean(dataToSend: CSVRecord[]) {

    return this.http.post(this.baseUrl + '/calculateMean', dataToSend)

  }

  calculateSD(dataToSend: CSVRecord[]) {

    return this.http.post(this.baseUrl + '/calculateSD', dataToSend)

  }

  calculateVar(dataToSend: CSVRecord[]) {

    return this.http.post(this.baseUrl + '/calculateVar', dataToSend)

  }
}
