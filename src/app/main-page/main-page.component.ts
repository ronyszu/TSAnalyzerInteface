import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {


results: { [key: string]: number };
booleanDict: { [key: string]: boolean }

  ngOnInit() {
  }

  updateResults(result: { [key: string]: number }){

    this.results = result;

  }


  updateDict(dict: { [key: string]: boolean }){
    this.booleanDict  = dict;

  }

}
