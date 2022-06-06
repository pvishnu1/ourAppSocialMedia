import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(userName: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    console.log(JSON.stringify(userName));
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userName));
  }

  public getUser(): any {
    const userName = window.sessionStorage.getItem(USER_KEY);
      console.log("parse userName"+userName);
    if (userName) {
      console.log("parse"+JSON.parse(userName));
      return JSON.parse(userName);
    }
    return {};
  }

}
