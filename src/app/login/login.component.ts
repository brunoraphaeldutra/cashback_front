import { Component, OnInit } from '@angular/core';
import { CashBackService } from '../Services/cashbackService';
import { AuthService } from '../Services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public erroLogin = false;
  public login = {
    username: '',
    password: ''
  };

  constructor(protected authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  realizarLogin() {
    this.authService.login(this.login).toPromise().then((a) => {
      console.log(a);
      this.authService.setToken(a.body);
      this.router.navigate(['/']);
    }).catch((ex) => {
       console.log('Erro ao consumir' + ex.message);
       this.erroLogin = true;
    });
    console.log('Login: ', this.login);
  }

}
