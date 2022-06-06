import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public posts: Post[];
  isLoggedIn = false;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    console.log(" this.tokenStorage.getToken() ==>"+this.tokenStorage.getToken());
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      let userName = this.tokenStorage.getUser();
      this.userService.getPostsForUser(userName).subscribe(
        data => {
          this.posts = data.payload;
          console.log("this.posts "+this.posts);
        },
        err => {

        }
      );
    }
  }


}
