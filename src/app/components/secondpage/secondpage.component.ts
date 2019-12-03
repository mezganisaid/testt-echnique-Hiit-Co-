import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApigithubService } from 'src/app/services/apigithub.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  currentID: String;
  infoUsers: any;

  constructor(
    private activeroute: ActivatedRoute,
    private serviceUser: ApigithubService,
    private location: Location) {
      this.currentID = this.activeroute.snapshot.paramMap.get("id");
      this.getOneUser();
   }

  ngOnInit() {
  }

  // Récupérer un profil by id
  getOneUser(){
    this.serviceUser.getOneUser(this.currentID).subscribe(
      data => {
        this.infoUsers = data;
      },(err:HttpErrorResponse)=> {
        console.log(err);
      });
  }


  // retourne en arrére
  goBack() {
    this.location.back();
  }

  // copier le texte par default, ou le texte taper
  copyURL(form){
    let selectValue = document.createElement('input');
    selectValue.style.position = 'fixed';
    selectValue.style.left = '0';
    selectValue.style.top = '0';
    selectValue.style.opacity = '0';
    selectValue.value = form.value.textcopied;
    document.body.appendChild(selectValue);
    selectValue.focus();
    selectValue.select();
    document.execCommand('copy');
  }

}
