import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ourAppSocialMediaTe';

  isLoggedIn = false;
  username?: string;
  myimage:string="assets/background.png";

  constructor(private tokenStorageService: TokenStorageService) { }

   ngOnInit(): void {
     this.isLoggedIn = !!this.tokenStorageService.getToken();
     if (this.isLoggedIn) {
       const user = this.tokenStorageService.getUser();
       this.username = user;
     }
   }

   logout(): void {
     this.tokenStorageService.signOut();
     window.location.reload();
   }

}
