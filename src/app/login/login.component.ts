import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    userName: String = "";

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.userName = this.tokenStorage.getUser();
      }
    }

    onSubmit(): void {
      const { username, password } = this.form;

      this.authService.login(username, password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.userName);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.userName = this.tokenStorage.getUser().userName;
          this.reloadPage();
        },
        err => {
          this.errorMessage = "invalid username/password";
          this.isLoginFailed = true;
        }
      );
    }

      reloadPage(): void {
        window.location.reload();
      }
}
