import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { HeaderComponent } from './components/header/header.component';

import { ApigithubService } from './services/apigithub.service';

import { ShortUrlPipe } from './pipes/short-url.pipe';
import { FilterTextPipe } from './pipes/filter-text.pipe';


const routes: Routes = [
  {path: '', component: FirstpageComponent, pathMatch: 'full'},
  {path: 'firstpage', component: FirstpageComponent},
  {path: 'secondpage/:id', component: SecondpageComponent},
  {path: '**', component: FirstpageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    HeaderComponent,
    ShortUrlPipe,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ApigithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
