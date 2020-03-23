import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(protected httpClient: HttpClient) { }

  public login(login): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:5000/api/login`, login);
  }

  public setToken(token) {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    return (token === '');
  }
}
