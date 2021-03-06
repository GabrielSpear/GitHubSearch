import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {
  private userName= "GabrielSpear";
  access_token ="e883ad186f34d0748fcf991a30a6db61cde5dba0";

constructor(private http:HttpClient) {

  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName +"?access_token=" +this.access_token) .map(res => res);

  }

  getProfileRepo(){
    return this.http.get("https://api.github.com/users/" +  this.userName+"/repos"+"?access_token="+this.access_token) .map(res => res);

  }

updateProfile(username:string){
  this.userName = username;

}

}
