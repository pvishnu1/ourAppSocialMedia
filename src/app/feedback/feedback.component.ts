import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from "@angular/router";
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public data:any={
      emailId : "",
      subject : "",
      description : ""
    }
isLoggedIn = false;

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService,private router: Router, private userService: UserService) { }

      ngOnInit(): void {
      }

      save(): void {
            this.userService.createFeedBack(this.data.emailId,this.data.subject,this.data.description).subscribe(
              data => {
                console.log(data);
                  this.router.navigate(["home"]);
              },
              err => {
                console.log(err);
              }
            );
        }

        cancel() : void {
          this.tokenStorage.signOut();
          this.router.navigate(["home"]);
        }
}
