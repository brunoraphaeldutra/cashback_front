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
    this.authService.login(this.login).subscribe((success) => {
      this.authService.setToken(success.body);
      this.getLoggedUser();
    }, (error) => {
      console.log('Erro ao consumir' + error.message);
      this.erroLogin = true;
    });
  }

  getLoggedUser() {
    this.authService.me().subscribe(
      (sucess) => {
        this.authService.setLogado(sucess.body);
        this.router.navigate(['/']);
    }, (error) => {
      console.log('Erro ao consumir' + error.message);
      });
  }

}
