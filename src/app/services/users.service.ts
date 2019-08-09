import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  viewAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/viewall`);
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/adduser`, user);
  }
    
}
