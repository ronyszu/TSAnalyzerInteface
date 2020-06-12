import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainPageComponent,
    ToolbarComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFileUploadModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
