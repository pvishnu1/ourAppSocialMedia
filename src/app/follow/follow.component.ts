import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Follow } from '../models/Follow';
import { Router } from "@angular/router";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  public followList : Follow[];
  public userName: any = "";


  constructor(  private router: Router,
                private tokenStorage: TokenStorageService,
                private userService: UserService
              ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.userName = this.tokenStorage.getUser();
      this.userService.getUserDetailsFollow(this.userName).subscribe(
        data => {
          this.followList = data.payload;
        },
        err => {
        }
      );
    }else{
      this.tokenStorage.signOut();
      this.router.navigate(["home"]);
    }
  }

  unFollowUser(follow :Follow) : void{
      if (this.tokenStorage.getToken()) {
        this.userName = this.tokenStorage.getUser();
          this.userService.unFollowUser(this.userName, follow.userId).subscribe(
            data => {
              console.log("data");
            },
            err => {
            }
          );
          this.ngOnInit();
      }else{
        this.tokenStorage.signOut();
        this.router.navigate(["home"]);
      }
  }

  followUser(follow :Follow) : void{
    if (this.tokenStorage.getToken()) {
      this.userName = this.tokenStorage.getUser();
        this.userService.followUser(this.userName, follow.userId).subscribe(
          data => {
            console.log("data");
          },
          err => {
          }
        );
        this.ngOnInit();
    }else{
      this.tokenStorage.signOut();
      this.router.navigate(["home"]);
    }
  }

}
