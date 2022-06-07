import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Post } from '../models/post';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public posts: Post[];
  userName: any = "";

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.userName = this.tokenStorage.getUser();

      this.userService.getPostsForUser(this.userName).subscribe(
        data => {
          this.posts = data.payload;
        },
        err => {
        }
      );
    }else{
      this.tokenStorage.signOut();
      this.router.navigate(["home"]);
    }

  }

}
