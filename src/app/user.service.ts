import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/'


  postData(user:User){
   return this.http.post<User>(`${this.url}register`,user);
  }





}
