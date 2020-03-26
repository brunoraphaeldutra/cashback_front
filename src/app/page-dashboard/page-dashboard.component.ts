import { Component, OnInit } from '@angular/core';
import { CashBackService } from '../Services/cashbackService';
import { Purchase } from '../model/PurchaseModel';
import { AuthService } from '../Services/AuthService';
import { Reseller } from '../model/ResellerModel';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {
  cashBack = '0';
  totalCashBack = 0;
  totalCompras = 0;
  compras: Purchase[];
  usuario = new Reseller();
  cpf = '';
  constructor(protected cashbackService: CashBackService,
              protected authService: AuthService) { }

  ngOnInit() {
    this.getUser();
    this.cpf = this.usuario.cpf;
    this.getCashBack();
    this.getPurchases();
  }

  getUser() {
    this.usuario = this.authService.getUsuario();
  }

  getCashBack() {
    this.cashbackService.getCashBackAmount(this.usuario.cpf).toPromise().then((a) =>
        this.cashBack = a.body
      ).catch((ex) => {
      this.cashBack = '0000';
      console.log('Erro ao consumir' + ex.message);
      });
  }

  getPurchases() {
    this.cashbackService.findPurchase(this.usuario.cpf).subscribe(
      (data) => {
      this.compras = data.body;
      this.totalCompras = this.compras.length;
      this.totalCashBack = this.compras.map(item => item.cash_back).reduce((prev, next) => prev + next );
    },
    (erro) => {
      console.log('Erro ao consumir:' + erro.message);
    });
  }


}
