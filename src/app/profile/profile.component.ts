import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})

export class ProfileComponent implements OnInit {
username:string;
// profiles:any=[];
repos:any=[];
user:any;

constructor(private profileService: ProfileService) {
console.log("jjjjf");
   }

   search(){
     this.profileService.updateProfile(this.username);
     this. profileService.getProfileInfo().subscribe(user => {
       // console.log(user);
       this.user=user;
     });

     this. profileService.getProfileRepo().subscribe(repos => {
       // console.log(user);
       this.repos=repos;
     });

   }

  ngOnInit() {
}
}
