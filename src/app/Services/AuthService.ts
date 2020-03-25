import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Reseller } from '../model/ResellerModel';

@Injectable()
export class AuthService {

  usuario = new Reseller();
  constructor(protected httpClient: HttpClient) { }

  public login(login): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:5000/api/login`, login).pipe(take(1));
  }

  public me(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:5000/api/reseller`).pipe(take(1));
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

  public setLogado(usuario) {
    console.log(usuario.cpf);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  public getUsuario(): Reseller {
    console.log(localStorage.getItem('usuario'));
    return JSON.parse(localStorage.getItem('usuario'));
  }
}
