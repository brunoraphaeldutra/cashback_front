import { Component, OnInit } from '@angular/core';
import { CashBackService } from '../Services/cashbackService';
import { AuthService } from '../Services/AuthService';
import { Reseller } from '../model/ResellerModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  texts: string[];
  results: string[];
  cashBack = '00010101';
  usuario = new Reseller();

  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.getLoggedUser();
  }

  search(event) {
    this.results = ['valor 1', 'valor 2'];
  }

  getLoggedUser() {
    this.usuario = this.authService.getUsuario();
  }

}
