import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_POST_URL = 'http://localhost:9010/ourApp/post/';
const API_FEEDBACK_URL = 'http://localhost:9010/ourApp/feedback/';
const API_FOLLOW_URL = 'http://localhost:9010/ourApp/follow/';

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

    getFollowerCount(userName :string): Observable<any> {
        return this.http.get(API_FOLLOW_URL + 'followers/'+userName);
     }

     getFollowingCount(userName :string): Observable<any> {
         return this.http.get(API_FOLLOW_URL + 'following/'+userName);
     }

     getUserDetailsFollow(userName :string): Observable<any> {
        return this.http.get(API_FOLLOW_URL + 'user/follow/available/'+userName);
     }

     followUser(userName :string, id : number): Observable<any> {
        return this.http.post(API_FOLLOW_URL + 'followUser',{
          userName, id
        }, httpOptions);
     }

     unFollowUser(userName :string, id : number): Observable<any> {
        return this.http.post(API_FOLLOW_URL + 'unFollowUser',{
          userName, id
        }, httpOptions);
     }
}
