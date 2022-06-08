import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_POST_URL = 'http://localhost:9010/ourApp/post/';
const API_FEEDBACK_URL = 'http://localhost:9010/ourApp/feedback/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createPostService(postTitle : string, postDescription : string, userName :string ): Observable<any> {
      return this.http.post(API_POST_URL + 'createPost', {
        postTitle,
        postDescription,
        userName
      }, httpOptions);
   }

   createFeedBack(emailId : string, subject : string, description :string ): Observable<any> {
       return this.http.post(API_FEEDBACK_URL + 'register', {
         emailId,
         subject,
         description
       }, httpOptions);
    }

   getPostsForUser(userName :string): Observable<any> {
       return this.http.post(API_POST_URL + 'myPosts', {
         userName
       }, httpOptions);
    }

}
