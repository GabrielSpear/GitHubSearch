import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {
  private userName= "GabrielSpear";
  access_token =environment.apiUrl;

constructor(private http:HttpClient) {
    console.log('GabrielSpear is on fire')

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
