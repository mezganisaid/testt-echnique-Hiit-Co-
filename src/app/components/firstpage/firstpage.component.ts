import { Component, OnInit } from '@angular/core';
import { ApigithubService } from 'src/app/services/apigithub.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {FilterTextPipe} from './../../pipes/filter-text.pipe';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  infoUsers: any;
  fauxtxt: String;
  searchText: String = '';
  constructor(
    private router: Router,
    private serviceUser: ApigithubService) { 
    this.getAllUsers();
    this.fauxtxt = `Accedat huc suavitas quaedam oportet sermonum atque morum, haudquaquam 
    mediocre condimentum amicitiae. Tristitia autem et in omni re severitas habet illa quidem 
    , sed amicitia remissior esse debet et liberior et dulcior et ad omnem comitatem facilitatemque proclivior.`;
  }

  ngOnInit() {
  }

  // Récuperer tous les users
  getAllUsers(){
    this.serviceUser.getUsers().subscribe(
      response => {
        this.infoUsers = response;
      },(err:HttpErrorResponse)=> {
        console.log(err);
      });
  }

  // Allez à la page 2 avec un paramétre
  getUsers(id){
     this.router.navigate([`/secondpage/${id}`]);
  }

}
