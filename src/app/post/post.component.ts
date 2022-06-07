import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  form: any = {
      title: null,
      description: null
    };

  submitted: boolean = false;
  isLoggedIn = false;
  anyError = false;
  isPostCreated = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }else{
      this.tokenStorage.signOut();
      this.router.navigate(["home"]);
    }
  }

  onSubmit() {
    const { title, description } = this.form;

    console.log("this.tokenStorage.getToken() ="+this.tokenStorage.getToken());
    console.log("this.tokenStorageService.getUser(); ="+this.tokenStorage.getUser());
    if (this.tokenStorage.getToken()) {
      let userName = this.tokenStorage.getUser();
      this.userService.createPostService(title,description,userName).subscribe(
        data => {
          this.isPostCreated = true;
        },
        err => {
          this.anyError = true;
        }
      );
    } else {
      this.anyError = true;
      this.tokenStorage.signOut();
      window.location.reload();
    }
  }

}
