import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MiceInputComponent } from './mice-input/mice-input.component';
import { ProfitsComponent } from './profits/profits.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextFieldModule } from '@angular/cdk/text-field';

// materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MiceInputComponent,
    ProfitsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TextFieldModule,

    // Materials
    MatFormFieldModule,
    MatGridListModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
