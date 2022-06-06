import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
      username: null,
      email: null,
      password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private router: Router, private authService: AuthService) { }

      ngOnInit(): void {
      }

      onSubmit(): void {
        const { username, email, password } = this.form;
        this.authService.register(username, email, password).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
      }

      loginUser(): void {
          this.router.navigate(["/login"]);
        }

}
