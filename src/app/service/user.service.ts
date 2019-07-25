import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';



@Injectable()
export class UserService {
  private baseUrl: string;
    constructor(private http: HttpClient) {
      this.baseUrl="http://localhost:8080/springboot-oauth2-app/rest/getUser";
     }

    public findAll(): Observable<User> {
      return this.http.get<User>(this.baseUrl);
    }
}
