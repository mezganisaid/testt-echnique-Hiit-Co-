import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigithubService {

  urldomaine: String;
  urlall: String;
  singleuser: String;
  constructor(private httpclient: HttpClient) { 
     this.urldomaine = 'https://api.github.com';
     this.urlall = `${this.urldomaine}/users`;
     this.singleuser = `${this.urldomaine}/users/`;
  }

  getUsers(){
    return this.httpclient.get(`${this.urlall}`);
  }

  getOneUser(id){
    return this.httpclient.get(`${this.singleuser + id}`);
  }

}
